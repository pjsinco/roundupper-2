<script>
import { nextTick, ref, computed, onMounted, watch } from 'vue';

import * as CodeMirror from 'codemirror';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { useRendererForAoaGeneral } from '@/composables/renderer-aoa-general';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const defaultImage1Url =
      'https://resources.osteopathic.org/l/979203/2024-08-06/g2yc1/979203/1722966237GpG2Zh5p/HubkaT_DO_Signature.jpg';
    const defaultImage2Url =
      'https://resources.osteopathic.org/l/979203/2024-02-15/d6dwm/979203/1708018506pNSVFVsl/signature_creason_228_2x.png';
    const defaultInput = `**Lorem Ipsum Dolor**  \nNullam Fringilla`;

    const sig1Url = ref(defaultImage1Url);
    const sig2Url = ref(defaultImage2Url);
    const sig1Image = ref(null);
    const sig2Image = ref(null);
    const sig1Padding = ref(0);
    const sig2Padding = ref(0);
    const sig1Spacer = ref(null);
    const sig2Spacer = ref(null);
    const sig1ImageWidth = ref(252);
    const sig2ImageWidth = ref(252);
    const sig1Input = ref(defaultInput);
    const sig2Input = ref(defaultInput);
    const showGuides = ref(false);
    let showingGuides = showGuides.value;
    const guideEl = ref(null);
    const canShowGuides = ref(true);
    const guideElId = 'guide';

    watch(sig1Input, () => {
      if (sig1Input.value == '') {
        canShowGuides.value = false;
      } else {
        canShowGuides.value = true;
      }
    });

    watch(showGuides, () => {
      const grafEl = guideEl.value.querySelector('p');

      if (showGuides.value === true) {
        // ... ok, we're turning on guides

        let elToWrap = null;
        let elToWrapParent = null;
        if (grafEl) {
          const firstChild = grafEl.firstChild;
          if (firstChild.tagName == 'SPAN') {
            // already wrapped
            return;
          }

          if (firstChild.nodeType == 1) {
            // it's an element
            elToWrap = firstChild.firstChild;
            elToWrapParent = firstChild;
          } else if (firstChild.nodeType == 3) {
            // it's a textnode
            elToWrap = firstChild;
            elToWrapParent = grafEl;
          }

          if (elToWrap && elToWrapParent) {
            const newSpan = document.createElement('span');
            newSpan.appendChild(document.createTextNode(elToWrap.nodeValue));
            newSpan.style.position = 'relative';
            newSpan.setAttribute('id', guideElId);
            newSpan.classList.add('guide');
            elToWrapParent.replaceChild(newSpan, elToWrap);
          }
        }
      } else {
        // ... ok, we're turning off guides

        const guideEl = document.getElementById(guideElId);
        guideEl.parentElement.innerHTML = guideEl.innerHTML;
      }
    });

    const { renderer } = useRendererForAoaGeneral();

    marked.use({ renderer });

    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const sig1Output = computed(() => {
      return marked(sig1Input.value);
    });

    const sig2Output = computed(() => {
      return marked(sig2Input.value);
    });

    function initEditors() {
      const el1 = document.getElementById('sig1Input');
      const editor1 = editorFromTextArea(sig1Input, el1);
      editor1.on('change', () => {
        // we can't show guides and edit text at same time
        showGuides.value = false;
      });

      const el2 = document.getElementById('sig2Input');
      const editor2 = editorFromTextArea(sig2Input, el2);
    }

    function handleMousedown(evt) {
      showingGuides = showGuides.value;
    }

    function handleMouseup(evt) {
      showGuides.value = showingGuides;
    }

    function copy() {
      function replaceMsoPlaceholders(html) {
        const replacements = [
          `<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="two-up-image-left-outlook" style="vertical-align:top;width:300px;" ><![endif]-->`,
          `<!--[if mso | IE]></td><td class="two-up-image-right-outlook" style="vertical-align:top;width:300px;" ><![endif]-->`,
          `<!--[if mso | IE]></td></tr></table><![endif]-->`,
        ];

        const regex = /<span.?id="mso_\d"><\/span>/gm;
        const targets = [...html.matchAll(regex)];

        console.log(
          `Found ${targets.length} targets for ${replacements.length} replacements`
        );

        for (let i = 0, len = replacements.length; i < len; i++) {
          html = html.replace(targets[i], replacements[i]);
        }

        return html;
      }

      showGuides.value = false;
      showingGuides = showGuides.value;

      copyHtml(replaceMsoPlaceholders);
    }

    function copyTextVersion() {
      copyText();
    }

    function reset() {
      window.location.reload();
    }

    onMounted(() => {
      initEditors();

      sig1Image.value.addEventListener('mousedown', handleMousedown);
      sig1Image.value.addEventListener('mouseup', handleMouseup);
      sig1Spacer.value.addEventListener('mousedown', handleMousedown);
      sig1Spacer.value.addEventListener('mouseup', handleMouseup);
      sig2Image.value.addEventListener('mousedown', handleMousedown);
      sig2Image.value.addEventListener('mouseup', handleMouseup);
      sig2Spacer.value.addEventListener('mousedown', handleMousedown);
      sig2Spacer.value.addEventListener('mouseup', handleMouseup);
    });

    return {
      sig1Image,
      sig2Image,
      sig1Url,
      sig2Url,
      sig1ImageWidth,
      sig2ImageWidth,
      sig1Spacer,
      sig2Spacer,
      sig1Padding,
      sig2Padding,
      sig1Input,
      sig2Input,
      sig1Output,
      sig2Output,
      showGuides,
      canShowGuides,
      guideEl,
      copy,
      copyTextVersion,
      reset,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/aoa-general/forms/two-up-with-image
    include ../../views/aoa-general/renders/two-up-with-image
</template>

<style>
.guide::after {
  content: '';
  position: absolute;
  bottom: 3px;
  left: -600px;
  right: -600px;
  border-bottom: 1px solid var(--secondary-color);
  overflow: hidden;
}

@media only screen and (min-width: 480px) {
  .mj-column-per-100 {
    width: 100% !important;
    max-width: 100%;
  }

  .mj-column-per-50 {
    width: 50% !important;
    max-width: 50%;
  }

  .mj-column-per-25 {
    width: 25% !important;
    max-width: 25%;
  }

  .mj-column-per-75 {
    width: 75% !important;
    max-width: 75%;
  }
}

@media only screen and (max-width: 479px) {
  table.mj-full-width-mobile {
    width: 100% !important;
  }

  td.mj-full-width-mobile {
    width: auto !important;
  }
}

@media only screen and (max-width: 481px) {
  .two-up-image-block > table > tbody > tr > td {
    padding-left: 36px !important;
    padding-right: 36px !important;
  }

  .two-up-image-right > table > tbody > tr > td {
    padding-left: 36px !important;
    padding-right: 36px !important;
  }
}
</style>

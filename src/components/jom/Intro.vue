<script>
import { ref, onMounted, computed, watch, useTemplateRef, nextTick } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { replaceMsoPlaceholders } from '@/utils';
import { useRendererForJom } from '@/composables/renderer-jom';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  setup() {
    const defaultInput = `Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.`;
    const defaultInputAdvance = `The following [Advance Articles](https://resources.osteopathic.org/jom/advance) are available to read now in full (and will be featured again in an upcoming issue of *Journal of Osteopathic Medicine*).\n<br><br>\nGet CME credits after reading *JOM*! Select *JOM* articles are accompanied by a CME exam, [click here](https://elearning.osteopathic.org/Public/Catalog/ChefView.aspx?Option=307) to begin receiving CME credits after you read the journal.`;

    const defaults = {
      'new-issue': defaultInput,
      'advance-articles': defaultInputAdvance,
    };

    const input = ref(defaultInput);

    const showAdForm = ref(false);
    const adImgSrcInput = useTemplateRef('adImgSrcInput');
    const coverImgSrcInput = useTemplateRef('coverImgSrcInput');

    const options = [
      {
        name: 'New Issue',
        short: 'new-issue',
      },
      {
        name: 'Advance Articles',
        short: 'advance-articles',
      },
    ];

    const selected = ref(options[0].short);

    const adImageAlt = ref('');
    const adImageLink = ref('');
    const adImageUrl = ref(
      'https://resources.osteopathic.org/l/979203/2026-07-15/rhy82/979203/1784133953q1w06nPi/placeholder_ad_180x180.png'
    );

    const coverImageAlt = ref('');
    const coverImageLink = ref('');
    const coverImageUrl = ref(
      'https://resources.osteopathic.org/l/979203/2026-07-15/rhzg5/979203/17841422263E2IJGrW/placeholder_jom_cover.png'
    );

    const { renderer } = useRendererForJom();

    let editor = null;

    marked.use({ renderer });

    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const output = computed(() => {
      return marked(input.value);
    });

    function initEditor() {
      const el = document.getElementById('input');
      editor = editorFromTextArea(input, el, '200px');
    }

    watch(selected, (newValue) => {
      console.log('newValue', newValue);
      input.value = newValue;
      const text = defaults[newValue] ? defaults[newValue] : '';
      editor.setValue(text);
    });

    watch(showAdForm, (newValue) => {
      if (newValue === true) {
        nextTick(() => {
          adImgSrcInput.value.focus();

          adImgSrcInput.value.select();
        });
      }
    });

    function copy() {
      const replacements = [
        '<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="i-body-column-outlook" style="vertical-align:top;width:600px;" ><![endif]-->',
        '<!--[if mso | IE]></td></tr></table><![endif]-->',
      ];

      copyHtml(replaceMsoPlaceholders(replacements));
    }

    function copyTextVersion() {
      copyText();
    }

    function reset() {
      window.location.reload();
    }

    onMounted(() => {
      initEditor();
    });

    return {
      input,
      output,
      reset,
      copy,
      selected,
      showAdForm,
      adImageAlt,
      adImageLink,
      adImageUrl,
      coverImageAlt,
      coverImageLink,
      coverImageUrl,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/jom/forms/intro
    include ../../views/jom/renders/intro
</template>

<style scoped></style>

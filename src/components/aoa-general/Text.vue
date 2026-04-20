<script>
import { ref, computed, onMounted } from 'vue';

import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { useWysiwyg } from '@/composables/wysiwyg';
import { useRendererForAoaGeneral } from '@/composables/renderer-aoa-general';
import { useEditorFromTextArea } from '@/composables/useEditorFromTextArea';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const defaultInput = `# Lorem ipsum dolor sit amet\nConsectetur adipisicing **elit**, sed do *eiusmod* [tempor incididunt](https://osteopathic.org) ut labore et dolore magna aliqua.`;
    const input = ref(defaultInput);
    const centerText = ref(false);
    let editor = null;
    const { makeLink, makeBold, makeItalic, makeFontStyle } = useWysiwyg();

    const { renderer } = useRendererForAoaGeneral();

    marked.use({ renderer });

    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const output = computed(() => {
      return marked(input.value);
    });

    const divStyle = computed(() => {
      return {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '24px',
        textAlign: centerText.value ? 'center' : 'left',
        color: '#2a2a2a',
      };
    });

    function initEditor() {
      const el = document.getElementById('input');
      editor = useEditorFromTextArea(input, el, 'calc(100vh - 425px)');
      console.log((window.ml = makeLink));
    }

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    function reset() {
      window.location.reload();
    }

    function handleMakeLink() {
      makeLink(editor);
    }

    function handleMakeBold() {
      makeFontStyle(editor, 'bold');
      //makeBold(editor);
    }

    function handleMakeItalic() {
      makeFontStyle(editor, 'italic');
      //makeItalic(editor);
    }

    onMounted(initEditor);

    return {
      input,
      output,
      centerText,
      divStyle,

      props,
      reset,
      copy,
      copyTextVersion,
      handleMakeLink,
      handleMakeBold,
      handleMakeItalic,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/aoa-general/forms/text
    include ../../views/aoa-general/renders/text
</template>

<style></style>

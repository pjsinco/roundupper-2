<script>
import { ref, onMounted, nextTick, computed } from 'vue';

import Workspace from '@/components/Workspace.vue';
import { useButtonSetup } from '@/composables/button-setup';
import { useRendererForExperiment } from '@/composables/renderer-experiment';
import { useAddImageAttributes } from '@/composables/add-image-attributes';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml } from '@/composables/useButtonFunctions';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  setup() {
    const bleed = ref(true);

    const { renderer, walkTokens, attachListStyles, styleAttributesExtension } =
      useRendererForExperiment();

    const { errorAddingImageAttr } = useAddImageAttributes();

    if (errorAddingImageAttr.value) {
      console.error('Error adding attributes to image.');
    }

    console.log('hi');

    marked.use({
      renderer,
      walkTokens,
      extensions: [styleAttributesExtension],
    });

    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const defaultInputLines = [
      '### Lorem ipsum',
      '* Donec id elit non mi porta gravida at eget metus.',
      '* Nulla vitae elit libero, a pharetra augue.',
      '* Etiam porta sem malesuada magna mollis euismod.',
    ];

    const input = ref(defaultInputLines.join('\n'));
    const output = computed(() => {
      const tokens = marked.lexer(input.value);
      marked.walkTokens(tokens, walkTokens);

      return marked(input.value);
    });

    function initEditor() {
      const el = document.getElementById('input');
      const editor = editorFromTextArea(input, el, '300px');
    }

    onMounted(() => {
      nextTick(initEditor);
    });

    function reset() {
      bleed.value = false;

      window.location.reload();
    }

    function copy() {
      copyHtml();
    }

    const tdStyle = computed(() => {
      return {
        fontSize: '0px',
        paddingTop: '24px',
        paddingRight: bleed.value ? '36px' : '72px',
        paddingBottom: '24px',
        paddingLeft: bleed.value ? '36px' : '72px',
        wordBreak: 'break-word',
        backgroundColor: 'aliceblue',
      };
    });

    return {
      input,
      output,
      reset,
      copy,
      bleed,
      tdStyle,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/generic/forms/highlight
    include ../../views/generic/renders/highlight

</template>

<style scoped></style>

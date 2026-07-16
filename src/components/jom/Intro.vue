<script>
import { ref, onMounted, computed, watch, useTemplateRef, nextTick } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
// import { replaceMsoPlaceholders, replaceMsoPaddingAlt } from '@/utils';
import { useRendererForJom } from '@/composables/renderer-jom';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  setup() {
    const defaultInput = `Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n`;
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
      const editor = editorFromTextArea(input, el, 'calc(25vh)');
    }

    watch(showAdForm, (newValue) => {
      if (newValue === true) {
        nextTick(() => {
          adImgSrcInput.value.focus();

          adImgSrcInput.value.select();
        });
      }
    });

    function copy() {
      copyHtml();
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

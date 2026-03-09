<script>
import { ref, computed, onMounted } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { getRenderer } from '@/composables/useMdRendererForAffiliates';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { marked } from 'marked';
import { getBookmark } from '@/composables/useBookmark';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const renderer = getRenderer();
    marked.use({ renderer });
    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const defaultInput =
      'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum.\n';
    const defaultHeadline = 'Lorem ipsum dolor';
    const defaultImageUrl = 'https://picsum.photos/150/150';

    const input = ref(defaultInput);
    const headline = ref(defaultHeadline);
    const imageUrl = ref(defaultImageUrl);
    const altText = ref('');

    const output = computed(() => {
      return marked(input.value);
    });

    function initEditor() {
      const el = document.getElementById('input');
      const editor = editorFromTextArea(input, el, '250px');
    }

    onMounted(initEditor);

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    function reset() {
      window.location.reload();

      //input.value = defaultInput;
      //headline.value = defaultHeadline;
      //imageUrl.value = defaultImageUrl;
      //altText.value = '';
    }

    const bookmark = getBookmark();

    return {
      input,
      output,
      props,
      reset,
      copy,
      copyTextVersion,
      headline,
      imageUrl,
      altText,
      bookmark,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/affiliates/forms/news-item-with-image
    include ../../views/affiliates/renders/news-item-with-image

</template>

<style scoped></style>

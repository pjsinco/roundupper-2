<script>
import { ref, onMounted, nextTick, computed } from 'vue';
import useToc from '@/composables/useToc';
import Workspace from '@/components/Workspace.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { getRenderer } from '@/composables/useMdRendererForAffiliates';
import { marked } from 'marked';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';

export default {
  components: {
    Workspace,
    LoadingSpinner,
  },

  setup() {
    const input = ref('');
    let editor = null;
		const renderer = getRenderer({ forToc: true });

    marked.use({ renderer });
    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const output = computed(() => {
      return marked(input.value);
    });

    function initEditor() {
      nextTick(() => {
        const el = document.getElementById('input');
        editor = editorFromTextArea(input, el, '250px');
      });
    }

    function copy() {
      copyHtml();
    }

    onMounted(initEditor);

    async function handleSubmit() {
      isLoading.value = true;
      error.value = '';
      reactions.value = reaction.nervous;

      //const url = 'http://localhost:5001/toc';
      const url = 'https://andthatproveswhat.com/roundupper-api/toc';

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: urlToFetch.value }),
        });
        const body = await response.text();

        input.value = `${defaultTocInput}\n${JSON.parse(body).data.join('\n')}`;

        nextTick(() => {
          editor.setValue(input.value);
          editor.focus();

          editor.setCursor({ line: 0, ch: 0 });
        });

        haveToc.value = true;
        reaction.value = reactions.testTube;
      } catch (err) {
        /* handle error */
        console.error(err);
        reaction.value = reactions.sad;

        haveToc.value = false;
        error.value = 'Error fetching TOC';
      } finally {
        isLoading.value = false;
      }
    }

    const defaultTocInput = '### Table of contents';

    const {
      urlToFetch,
      isLoading,
      tocMarkdown,
      haveToc,
      reset,
      error,
      reaction,
      reactions,
    } = useToc();

    return {
      urlToFetch,
      handleSubmit,
      isLoading,
      tocMarkdown,
      input,
      haveToc,
      output,
      reset,
      copy,
      error,
      reaction,
      reactions,
    };
  },
};
</script>

<template lang="pug">
  loadingSpinner(v-show="isLoading")

  Workspace
    include ../../views/affiliates/forms/toc
    include ../../views/affiliates/renders/toc
</template>

<style scoped></style>

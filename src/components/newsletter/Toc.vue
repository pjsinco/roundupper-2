<script>
import { ref, onMounted, nextTick, computed } from 'vue';
import Workspace from '@/components/Workspace.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { useRendererForNewsletter } from '@/composables/renderer-newsletter';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
    LoadingSpinner,
  },

  setup() {
    const urlToFetch = ref('');
    const isLoading = ref(false);
    const haveToc = ref(false);
    const tocMarkdown = ref('');
    const input = ref('');
    const error = ref('');
    let editor = null;
    const reactions = {
      testTube: '🧪',
      safetyGlasses: '🥽',

      happy: '🙂',
      nervous: '😬',
      sad: '🙁',
    };
    const reaction = ref(reactions.safetyGlasses);

    console.log('hiya');

    const defaultTocInput = '### In this issue';

    const { renderer } = useRendererForNewsletter();

    console.log('hiya');

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

    function reset() {
      window.location.reload();
    }

    function copy() {
      copyHtml();
    }

    onMounted(initEditor);

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
    include ../../views/newsletter/forms/toc
    include ../../views/newsletter/renders/toc
</template>

<style scoped></style>

import { ref, onMounted, nextTick, computed, watch } from 'vue';
import { useRendererForNewsletter } from '@/composables/renderer-newsletter';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { marked } from 'marked';

export default function useToc() {
  const urlToFetch = ref('');
  const isLoading = ref(false);
  const haveToc = ref(false);
  const tocMarkdown = ref('');
  const error = ref('');
  const reactions = {
    testTube: '🧪',
    safetyGlasses: '🥽',
    happy: '🙂',
    nervous: '😬',
    sad: '🙁',
  };
  const reaction = ref(reactions.safetyGlasses);

  function reset() {
    window.location.reload();
  }

  function copy() {
    copyHtml();
  }

  return {
    urlToFetch,
    isLoading,
    tocMarkdown,
    haveToc,
    reset,
    copy,
    error,
    reaction,
    reactions,
  };
}

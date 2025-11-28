<script>
import * as CodeMirror from 'codemirror';
import { nextTick, ref, computed, onMounted } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { find } from 'lodash-es';
import { useRendererForAoaGeneral } from '@/composables/renderer-aoa-general';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import { marked } from 'marked';
import Constants from '@/constants/aoa-general';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const defaultImageUrl = Constants.DEFAULT_HEADER_URL;
    const defaultInput = Constants.DEFAULT_TEXT_MARKDOWN;

    const { renderer } = useRendererForAoaGeneral();

    let currId = 0;

    function getId() {
      const idToReturn = currId;
      currId++;
      return idToReturn;
    }

    function getNewItem() {
      const id = getId();
      return {
        imageUrl: defaultImageUrl,
        iconLink: '',
        input: defaultInput,
        enabled: true,
        id,
        get output() {
          return marked(this.input);
        },
      };
    }

    function getDefaultItems() {
      const item1 = getNewItem();
      const item2 = getNewItem();
      const item3 = getNewItem();

      return [item1, item2, item3];
    }

    const items = ref(getDefaultItems());

    marked.use({ renderer });

    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const reset = () => {
      window.location.reload();
    };

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    function initEditor(item) {
      const el = document.getElementById(`input-${item.id}`);

      const editor = CodeMirror.fromTextArea(el, {
        mode: 'markdown',
        lineWrapping: true,
      });
      editor.setSize('100%', '80px');
      editor.on('change', () => {
        item.input = editor.getValue();
      });
      return editor;
    }

    function initEditors() {
      const editors = items.value.map(initEditor);
    }

    onMounted(initEditors);

    function handleDelete(item) {
      item.enabled = false;
    }

    function handleAdd() {
      const newItem = getNewItem();

      items.value.push(newItem);

      nextTick(() => {
        const item = items.value[items.value.length - 1];
        initEditor(item);
      });
    }

    const numEnabled = computed(() => {
      return items.value.filter((item) => {
        return item.enabled === true;
      }).length;
    });

    return {
      items,
      props,
      reset,
      copy,
      copyTextVersion,
      handleDelete,
      handleAdd,
      numEnabled,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/aoa-general/forms/icon-list
    include ../../views/aoa-general/renders/icon-list
</template>

<style lang="scss">
@import './../../assets/_variables.scss';

.delete {
  cursor: pointer;
}

@media only screen and (min-width: 480px) {
  .mj-column-per-100 {
    width: 100% !important;
    max-width: 100%;
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
</style>

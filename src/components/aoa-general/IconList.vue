<script>
import { nextTick, ref, computed, watch, onMounted } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { find } from 'lodash-es';
import { useRendererForAoaGeneral } from '@/composables/renderer-aoa-general';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import { marked } from 'marked';
import Constants from '@/constants/aoa-general';
import { renderToString } from 'vue/server-renderer';
import { replaceMsoPlaceholders } from '@/utils';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const sizeOptions = ref([
      { text: 'Small (42px-wide icon)', value: 'sm' },
      { text: 'Medium (100px-wide icon)', value: 'md' },
      { text: 'Large (158px-wide icon)', value: 'lg' },
    ]);
    const selectedSize = ref('sm');

    const defaultInput = Constants.DEFAULT_TEXT_MARKDOWN;
    let defaultImageUrl =
      Constants[`DEFAULT_ICON_${selectedSize.value.toUpperCase()}`];

    watch(selectedSize, (newSelectedSize) => {
      defaultImageUrl =
        Constants[`DEFAULT_ICON_${newSelectedSize.toUpperCase()}`];

      for (const item of items.value) {
        // TODO not sure if item.touched is ever true
        if (!item.touched) {
          item.imageUrl =
            Constants[`DEFAULT_ICON_${selectedSize.value.toUpperCase()}`];
        }
      }
    });

    function handleImageUrlChange(index, val) {
      items.value[index].imageUrl = val;
      items.value[index].touched = true;
    }

    const sizes = {
      sm: {
        proportions: ['15', '85'],
        divWidths: ['79', '449'],
        tdWidth: '42',
      },
      md: {
        proportions: ['25', '75'],
        divWidths: ['132', '396'],
        tdWidth: '100',
      },
      lg: {
        proportions: ['35', '65'],
        divWidths: ['185', '343'],
        tdWidth: '153',
      },
    };

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
        touched: false,
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
      const replacements = [
        `<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" valign="top" style="vertical-align:top;" style="width:${sizes[selectedSize.value].divWidths[0]}px;" ><![endif]-->`,
        `<!--[if mso | IE]></td><td class="" valign="top" style="vertical-align:top;width:${sizes[selectedSize.value].divWidths[1]}px;" ><![endif]-->`,
        `<!--[if mso | IE]></td></tr></table><![endif]-->`,
      ];
      copyHtml(replaceMsoPlaceholders(replacements, items.value.length));
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
      sizeOptions,
      handleImageUrlChange,
      selectedSize,
      sizes,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/generic/forms/icon-list
    include ../../views/generic/renders/icon-list
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

  .mj-column-per-35 {
    width: 35% !important;
    max-width: 35%;
  }

  .mj-column-per-65 {
    width: 65% !important;
    max-width: 65%;
  }

  .mj-column-per-75 {
    width: 75% !important;
    max-width: 75%;
  }

  .mj-column-per-15 {
    width: 15% !important;
    max-width: 15%;
  }

  .mj-column-per-85 {
    width: 85% !important;
    max-width: 85%;
  }
}
</style>

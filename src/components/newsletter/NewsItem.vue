<script>
import { ref, computed, onMounted, nextTick } from 'vue';
import Workspace from '@/components/Workspace.vue';
import Tabs from '@/components/Tabs.vue';
import Tab from '@/components/Tab.vue';
import Switch from '@/components/Switch.vue';
import Option from '@/components/Option.vue';
import ButtonLink from '@/components/ButtonLink.vue';
import CloseButton from '@/components/CloseButton.vue';
import ItemGroup from '@/components/ItemGroup.vue';
import { useRendererForNewsletter } from '@/composables/renderer-newsletter';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { useButtonSetup } from '@/composables/button-setup';
import { useAddImageAttributes } from '@/composables/add-image-attributes';
import { marked } from 'marked';
import { getBookmark } from '@/composables/useBookmark';
import Constants from '@/constants/newsletter';

export default {
  components: {
    Workspace,
    Tabs,
    Tab,
    Switch,
    Option,
    ButtonLink,
    CloseButton,
    ItemGroup,
  },

  props: ['currentTemplate'],

  setup(props) {
    const { renderer } = useRendererForNewsletter();

    marked.use({ renderer });
    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const { errorAddingImageAttr } = useAddImageAttributes();

    if (errorAddingImageAttr.value) {
      console.error('Error adding attributes to image.');
    }

    const defaultInput = Constants.DEFAULT_TEXT_MD;
    const defaultHeadline = '### Lorem ipsum dolor';
    const defaultImageUrl = 'https://picsum.photos/150/150';

    const input = ref(defaultInput);
    const headline = ref(defaultHeadline);
    const imageUrl = ref(defaultImageUrl);
    const caption = ref('');
    const includeImage = ref(false);
    const includeButton = ref(true);
    const dividerAbove = ref(true);
    const bookmark = getBookmark();
    const tabRef = ref({});

    const output = computed(() => {
      return marked(input.value);
    });
    const headlineOutput = computed(() => {
      return marked(headline.value);
    });
    const imageTdStyle = computed(() => {
      return {
        paddingTop: '3px',
        paddingBottom: caption.value == '' ? '18px' : '0px',
        paddingLeft: '24px',
        paddingRight: '0px',
        lineHeight: '1px',
      };
    });

    function initEditors() {
      nextTick(() => {
        const textEl = document.getElementById('input');
        const textEditor = editorFromTextArea(input, textEl, '300px');

        const headlineEl = document.getElementById('headline');
        const headlineEditor = editorFromTextArea(headline, headlineEl, '72px');
      });
    }

    onMounted(initEditors);

    function handleAddImage() {
      includeImage.value = true;
    }

    function handleAddButton() {
      includeButton.value = true;
    }

    const { text, link, spaceAbove, spaceBelow, copy, buttonTdStyle, hex } =
      useButtonSetup({
        spaceAbove: true,
        spaceBelow: false,
        colorName: 'Navy',
      });

    function reset() {
      window.location.reload();
    }

    return {
      input,
      headline,
      output,
      headlineOutput,
      props,
      reset,
      copy,
      imageUrl,
      caption,
      includeImage,
      includeButton,
      dividerAbove,
      imageTdStyle,
      bookmark,
      tabRef,
      handleAddImage,
      handleAddButton,
      text,
      link,
      spaceAbove,
      spaceBelow,
      buttonTdStyle,
      hex,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/newsletter/forms/news-item
    include ../../views/newsletter/renders/news-item

</template>

<style scoped></style>

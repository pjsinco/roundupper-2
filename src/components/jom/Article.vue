<script>
import { ref, watch, computed } from 'vue';
import Workspace from '@/components/Workspace.vue';
import Constants from '@/constants/jom';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { replaceMsoPlaceholders } from '@/utils';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const categoryOptions = Constants.CATEGORIES;
    let defaults = {
      selectedCat: categoryOptions.find((cat) => cat.name === 'General').value,
      type: '',
      authors: '',
      link: '',
      title: '',
      description: '',
      imageUrl: '',
      caption: '',
      imageLink: '',
      imageAltText: '',
      showImageForm: false,
    };

    const selectedCat = ref(defaults.selectedCat);
    const type = ref(defaults.type);
    const authors = ref(defaults.authors);
    const link = ref(defaults.link);
    const description = ref(defaults.description);
    const title = ref(defaults.title);
    const imageUrl = ref(defaults.imageUrl);
    const caption = ref(defaults.caption);
    const imageLink = ref(defaults.link);
    const imageAlt = ref(defaults.imageAltText);
    const showImageForm = ref(defaults.showImageForm);

    const selectedCatName = computed(() => {
      const selectedOption = categoryOptions.find((option) => {
        return option.value === selectedCat.value;
      });
      return selectedOption.name;
    });

    const imagePadding = computed(() => {
      return caption.value !== '' ? '0 0 8px 0' : '0 0 0 0';
    });

    watch(link, (newValue) => {
      imageLink.value = newValue;
    });

    function copy() {
      const replacements = [
        '<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="i-body-column-outlook" style="vertical-align:top;width:600px;" ><![endif]-->',
        '<!--[if mso | IE]></td></tr></table><![endif]-->',
      ];
      copyHtml(replaceMsoPlaceholders(replacements));
    }

    function copyTextVersion() {
      copyText();
    }

    return {
      categoryOptions,
      selectedCatName,
      selectedCat,
      link,
      title,
      type,
      description,
      authors,
      imageUrl,
      caption,
      imageLink,
      imageAlt,
      showImageForm,
      imagePadding,
      copy,
      copyTextVersion,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/jom/forms/article
    include ../../views/jom/renders/article

</template>

<style scoped></style>

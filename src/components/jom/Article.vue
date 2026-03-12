<script>
import { ref, watch } from 'vue';
import Workspace from '@/components/Workspace.vue';
import Constants from '@/constants/jom';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const categories = Constants.CATEGORIES;

    let defaults = {
      selectedCat: categories[0].short,
      type: '',
      authors: '',
      link: '',
      title: '',
      description: '',
    };

    const selectedCat = ref(defaults.selectedCat);
    const type = ref(defaults.type);
    const authors = ref(defaults.authors);
    const link = ref(defaults.link);
    const description = ref(defaults.description);
    const title = ref(defaults.title);

    return {
      categories,
      selectedCat,
      link,
      title,
      type,
      description,
      authors,
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

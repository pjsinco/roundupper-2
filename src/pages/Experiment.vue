<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import NavOptions from '@/components/NavOptions.vue';
import SelectTemplate from '@/components/SelectTemplate.vue';
import { RouterView } from 'vue-router';
import { toastClose } from '@/composables/useToast';
import { useNavigation } from '@/composables/navigation';

export default {
  components: {
    Navbar,
    NavOptions,
    SelectTemplate,
    RouterView,
  },

  setup() {
    const { handleTemplateSelect, childRoutes, activePath } =
      useNavigation('/experiment/');

    return {
      handleTemplateSelect,
      childRoutes,
      activePath,
      toastClose,
    };
  },
};
</script>

<template lang="pug">
div.blank
  navbar(templateName="Experiment")
    template(v-slot:select)
      SelectTemplate(v-on:template-selected="handleTemplateSelect")
        NavOptions(:routes="childRoutes" :active-path="activePath")
    Transition(name="fade" appear mode="out-in")
      component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")
  RouterView

  include ../views/includes/toast

</template>

<style scoped></style>

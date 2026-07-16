<script>
import { ref } from 'vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import Workspace from '@/components/Workspace.vue';
import { replaceMsoPlaceholders, replaceMsoPaddingAlt } from '@/utils';

export default {
  components: {
    Workspace,
  },

  setup() {
    const adImageAlt = ref('');
    const adImageLink = ref('');
    const adImageUrl = ref(
      'https://resources.osteopathic.org/l/979203/2026-07-15/rhzxr/979203/1784149927TNrcuNQu/placeholder_top_ad.png'
    );

    function copy() {
      const replacements = [
        '<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:624px;" ><![endif]-->',

        '<!--[if mso | IE]></td></tr></table><![endif]-->',
      ];

      copyHtml(replaceMsoPlaceholders(replacements));
    }

    function reset() {
      window.location.reload();
    }

    return {
      adImageAlt,
      adImageLink,
      adImageUrl,
      copy,
      reset,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/jom/forms/top-ad
    include ../../views/jom/renders/top-ad


</template>

<style scoped></style>

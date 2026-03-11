<script>
import { ref, computed, watch } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { debounce } from 'lodash-es';
import { replaceMsoPlaceholders } from '@/utils';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const defaultImageUrl =
      'https://resources.osteopathic.org/l/979203/2024-02-08/d3kmr/979203/1707396067as5M6Jke/ph_250sq.png';
    const imageUrl = ref(defaultImageUrl);
    const alignOptions = ref([
      { text: 'Left', value: 'left' },
      { text: 'Center', value: 'center' },
      { text: 'Right', value: 'right' },
    ]);
    const selectedAlign = ref('center');
    const spaceAbove = ref(true);
    const spaceBelow = ref(true);
    const bleed = ref(false);
    const caption = ref('Lorem ipsum dolor');
    const altText = ref('');
    const displayWidth = ref(253);
    const link = ref('');

    const reset = () => {
      imageUrl.value = defaultImageUrl;
      selectedAlign.value = 'center';
      spaceAbove.value = true;
      spaceBelow.value = true;
      caption.value = 'Lorem ipsum dolor';
      displayWidth.value = 253;
      bleed.value = false;
      link.value = '';
    };

    function copy() {
      const replacements = [
        `<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:528px;" ><![endif]-->`,
        `<!--[if mso | IE]></td></tr></table><![endif]-->`,
      ];

      copyHtml(replaceMsoPlaceholders(replacements));
    }

    function copyTextVersion() {
      copyText();
    }

    const spacingStyle = computed(() => {
      return {
        paddingTop: spaceAbove.value ? '24px' : '0',
        paddingRight: bleed.value ? '0' : '36px',
        paddingBottom: spaceBelow.value ? '24px' : '0',
        paddingLeft: bleed.value ? '0' : '36px',
        direction: 'ltr',
        fontSize: '0px',
        textAlign: 'center',
      };
    });

    const captionTdStyle = computed(() => {
      return {
        fontSize: '0px',
        paddingTop: '8px',
        paddingLeft: bleed.value ? '36px' : '0',
        paddingRight: bleed.value ? '36px' : '0',
        paddingBottom: '0',
        wordBreak: 'break-word',
      };
    });

    const captionStyle = computed(() => {
      return {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '21px',
        textAlign: selectedAlign.value,
        color: '#666666',
      };
    });

    const displayWidthNumber = computed(() => {
      const regex = /(\d+)/gm;

      const matches = `${displayWidth.value}`.match(regex);
      if (matches) {
        return matches[0];
      }

      return null;
    });

    function constrainWidth(newWidth) {
      if (bleed.value) {
        if (newWidth > 600) {
          displayWidth.value = 600;
        }
      } else {
        if (newWidth > 528) {
          displayWidth.value = 528;
        }
      }
    }

    // make sure we don't go over 600
    watch(displayWidth, debounce(constrainWidth, 250));

    watch(bleed, (newVal) => {
      if (!bleed.value) {
        if (displayWidth.value > 528) {
          displayWidth.value = 528;
        }
      }
    });

    return {
      displayWidth,
      displayWidthNumber,
      bleed,
      altText,
      caption,
      spacingStyle,
      captionStyle,
      captionTdStyle,
      alignOptions,
      imageUrl,
      selectedAlign,
      spaceAbove,
      spaceBelow,
      reset,
      copy,
      copyTextVersion,
      link,
    };
  },
};
</script>

<template lang="pug">

  Workspace
    include ../../views/aoa-general/forms/image-block
    include ../../views/aoa-general/renders/image-block
</template>

<style scoped></style>

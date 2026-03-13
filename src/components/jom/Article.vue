<script>
import { ref, watch, computed, onMounted, useTemplateRef, nextTick } from 'vue';
import Workspace from '@/components/Workspace.vue';
import Constants from '@/constants/jom';
import Tabs from '@/components/Tabs.vue';
import Tab from '@/components/Tab.vue';
import Switch from '@/components/Switch.vue';
import Option from '@/components/Option.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { replaceMsoPlaceholders, replaceMsoPaddingAlt } from '@/utils';

export default {
  components: {
    Workspace,
    Tabs,
    Tab,
    Switch,
    Option,
    LoadingSpinner,
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
      imageAlt: '',
      showImageForm: false,
      dividerBelow: true,
      fetched: false,
      fetchError: '',
      idToFetch: '',
      isLoading: false,
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
    const imageAlt = ref(defaults.imageAlt);
    const showImageForm = ref(defaults.showImageForm);
    const dividerBelow = ref(defaults.dividerBelow);
    const fetched = ref(defaults.fetched);
    const idToFetch = ref(defaults.idToFetch);
    const fetchError = ref(defaults.fetchError);
    const isLoading = ref(defaults.isLoading);
    const input = useTemplateRef('idInput');

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

    onMounted(() => {
      nextTick(() => {
        input.value.focus();
      });
    });

    function copy() {
      const replacements = [
        '<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="i-body-column-outlook" style="vertical-align:top;width:600px;" ><![endif]-->',
        '<!--[if mso | IE]></td></tr></table><![endif]-->',
      ];

      // our 'mso-padding-alt' is getting stripped
      const msoFn = replaceMsoPlaceholders(replacements);
      copyHtml(replaceMsoPaddingAlt(msoFn));
    }

    function copyTextVersion() {
      copyText();
    }

    async function handleSubmit() {
      isLoading.value = true;
      fetchError.value = false;

      const url = 'https://andthatproveswhat.com/roundupper-api/jom/abstracts';

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: idToFetch.value }),
        });

        const body = await response.json();
        console.info(body);

        if (body.data) {
          const { data } = body;
          const { acf } = data;

          // update article values
          selectedCat.value = data['_embedded']['wp:term'][0][0].slug;
          type.value = acf.type;
          authors.value = acf.authors;

          if (/pdf$/.test(acf.pdf_link)) {
            link.value = acf.pdf_link.slice(0, -3).concat('html');
          } else {
            link.value = acf.pdf_link;
          }

          description.value = data.excerpt.rendered;
          title.value = data.title.rendered;
        }

        fetched.value = true;
      } catch (err) {
        /* handle error */
        console.error(err);
        fetchError.value = 'Error fetching article';
      } finally {
        isLoading.value = false;
      }
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
      dividerBelow,
      idToFetch,
      fetched,
      handleSubmit,
      fetchError,
      isLoading,
    };
  },
};
</script>

<template lang="pug">
  loadingSpinner(v-show="isLoading")

  Workspace
    include ../../views/jom/forms/article
    include ../../views/jom/renders/article
</template>

<style scoped></style>

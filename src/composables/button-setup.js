import { ref, computed, watch } from 'vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';

export function useButtonSetup(args = {}) {
  let defaults = {
    spaceAbove: true,
    spaceBelow: true,
    text: 'Learn more',
    link: '',
    colorName: 'Teal',
  };
  let options = Object.assign({}, defaults, args);

  const colorOptions = [
    {
      name: 'Teal',
      hex: '#22a49c',
    },
    {
      name: 'Navy',
      hex: '#000066',
    },
  ];

  const text = ref(options.text);
  const link = ref(options.link);
  const spaceAbove = ref(options.spaceAbove);
  const spaceBelow = ref(options.spaceBelow);
  const selectedColor = ref(options.colorName);
  const hex = ref(findColorByName(options.colorName).hex);

  function findColorByName(name) {
    return colorOptions.find((option) => {
      return option.name === name;
    });
  }

  watch(selectedColor, (newSelected) => {
    const color = findColorByName(newSelected);
    hex.value = color.hex;
  });

  function copy() {
    function replaceMsoPlaceholders(html) {
      const replacements = [
        `<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->`,
        `<!--[if mso | IE]></td></tr></table><![endif]-->`,
      ];

      const regex = /<span[^>]*id="mso_\d+"[^>]*>[\s\S]*?<\/span>/gm;
      const targets = [...html.matchAll(regex)];

      console.log(
        `Found ${targets.length} targets for ${replacements.length} replacements`
      );

      for (let i = 0, len = replacements.length; i < len; i++) {
        html = html.replace(targets[i], replacements[i]);
      }

      return html;
    }

    // our inline style 'mso-padding-alt' gets stripped
    // somewhere along the line, so we need to add it back in.
    const addMsoStyle = (html) => {
      html = replaceMsoPlaceholders(html);

      // TODO - use replaceMsoPaddingAlt() in utils
      const fragment = new DocumentFragment();
      const div = document.createElement('div');
      div.innerHTML = html;
      fragment.append(div);

      const tdEl = fragment.getElementById('msoPadding');

      if (tdEl !== null) {
        // now we can use DOM methods
        const styleAttr = tdEl.getAttribute('style');
        const newStyleAttr = `${styleAttr} mso-padding-alt: 10px 32px;`;
        tdEl.setAttribute('style', newStyleAttr);
      }

      return fragment.firstElementChild.innerHTML;
    };

    copyHtml(addMsoStyle);
  }

  function copyTextVersion() {
    copyText();
  }

  function reset() {
    text.value = 'Learn more';
    link.value = '';
  }

  const buttonTdStyle = computed(() => {
    return {
      direction: 'ltr',
      fontSize: '0px',
      paddingTop: spaceAbove.value ? '20px' : '0',
      paddingBottom: spaceBelow.value ? '20px' : '0',
      paddingLeft: '0px',
      textAlign: 'center',
    };
  });

  return {
    text,
    link,
    spaceAbove,
    spaceBelow,
    copy,
    copyTextVersion,
    reset,
    buttonTdStyle,
    selectedColor,
    colorOptions,
    hex,
  };
}

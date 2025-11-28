import { useAoaGeneralRenders } from '@/composables/styles-base-aoa-general';
import Constants from '@/constants/aoa-general';

export function useRendererForExperiment() {
  // don't use heading
  const { paragraph, link, image, list } = useAoaGeneralRenders();

  // TODO
  // set up our own heading
  const heading = function (text, level) {
    switch (level) {
      case 1:
        const h1Style = Constants.Styles.H1_STYLE;
        return `<h1 style="${h1Style.join('; ')}">${text}</h1>\n`;
        break;

      case 2:
        const h2Style = Constants.Styles.H2_STYLE;
        return `<h2 style="${h2Style.join('; ')}">${text}</h1>\n`;
        break;

      case 3:
        const h3Style = Constants.Styles.H3_STYLE;
        return `<h3 style="${h3Style.join('; ')}">${text}</h3>\n`;
        break;

      case 4:
        const h4Style = Constants.Styles.H4_STYLE;
        return `<h4 style="${h4Style.join('; ')}">${text}</h4>\n`;
        break;

      case 5:
      default:
        const h5Style = Constants.Styles.H5_STYLE;
        return `<h5 style="${h5Style.join('; ')}">${text}</h5>\n`;
        break;
    }
  };

  const renderer = {
    paragraph,
    heading,
    link,
    list,
    image,
  };

  return { renderer };
}

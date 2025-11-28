import { useAoaGeneralRenders } from '@/composables/styles-base-aoa-general';
import Constants from '@/constants/aoa-general';
import { marked } from 'marked';

export function useRendererForExperiment() {
  const { paragraph, link, image, list } = useAoaGeneralRenders();

  // const walkTokens = function (token) {
  //   if (token.type !== 'heading') {
  //     return;
  //   }

  //   const match = token.text.match(/^(.*)\s+\{color=([^}]+)\}\s*$/);
  //   if (!match) {
  //     return;
  //   }

  //   console.log('okgottamatch');
  //   console.log('match', match);

  //   // 1. Keep only the visible heading text
  //   token.text = match[1];

  //   // 2. Store the color so the renderer can use it
  //   token.color = match[2].trim();

  //   // 3. Rebuild the inline child tokens on the new text
  //   token.tokens = marked.Lexer.lexInline(token.text);
  // };

  // const tokenizer = {
  //   heading(src) {
  //     // Check for [color=...] at the start of the text
  //     console.log('src', src);
  //     const colorMatch = src.match(/^\[color=([^\]]+)\]\s+(.*)$/i);
  //     let color = null;

  //     console.log('colorMatch', colorMatch);

  //     if (colorMatch) {
  //       color = colorMatch[1].trim();
  //       text = colorMatch[2].trim();

  //       return {
  //         type: 'heading',
  //         raw: match,
  //         depth,
  //         text,
  //         color,
  //       };
  //     }

  //     // return false to use original heading tokenizer
  //     return false;
  //   },
  // };

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

  // const heading = function ({ tokens, depth }) {
  //   console.log('tokens', tokens);
  //   console.log('depth', depth);
  // };

  const renderer = {
    paragraph,
    heading,
    link,
    list,
    image,
  };

  // return { renderer, walkTokens };
  return { renderer };
}

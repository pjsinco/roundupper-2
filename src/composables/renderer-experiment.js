// import { useAoaGeneralRenders } from '@/composables/styles-base-aoa-general';
import { useExperimentalRenders } from '@/composables/styles-base-experimental';
import Constants from '@/constants/aoa-general';
import { marked } from 'marked';

export function useRendererForExperiment() {
  const { heading, paragraph, link, image, list } = useExperimentalRenders();

  // parse "color=red font-size=2rem font-family=\"Fira Sans\""
  //   → { color: 'red', 'font-size': '2rem', 'font-family': 'Fira Sans' }
  function parseStyleAttrs(input) {
    const attrs = {};
    if (!input) return attrs;

    const re = /([a-zA-Z0-9_-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"']+))/g;
    let match;

    while ((match = re.exec(input)) !== null) {
      const name = match[1];
      const value = match[2] ?? match[3] ?? match[4] ?? '';
      attrs[name] = value;
    }

    return attrs;
  }

  // TODO move to Constants
  const INLINE_STYLABLE_TYPES = new Set(['link']);

  function attachInlineStyles(inlineTokens) {
    if (!Array.isArray(inlineTokens)) return;

    for (let i = 0; i < inlineTokens.length; i++) {
      const token = inlineTokens[i];

      if (token.type === 'styleAttributes') {
        const prev = inlineTokens[i - 1];

        if (prev && INLINE_STYLABLE_TYPES.has(prev.type)) {
          const attrs = parseStyleAttrs(token.attrs);

          // Merge with any existing styles
          prev.styleAttrs = Object.assign(prev.styleAttrs || {}, attrs);

          // Remove this style token from the stream
          inlineTokens.splice(i, 1);
          i--; // stay on same index for next iteration
        }

        // If prev is not stylable, we leave it in place for now.
        // It might be a block-level style (handled next),
        // or just be ignored and rendered as empty later.
      }
    }
  }

  function attachBlockStyles(blockToken) {
    const inlineTokens = blockToken.tokens;
    if (!Array.isArray(inlineTokens) || inlineTokens.length === 0) return;

    const last = inlineTokens[inlineTokens.length - 1];
    if (last && last.type === 'styleAttributes') {
      const attrs = parseStyleAttrs(last.attrs);
      blockToken.styleAttrs = Object.assign(blockToken.styleAttrs || {}, attrs);

      // Remove the style token so it doesn't render anything
      inlineTokens.pop();
    }
  }

  function attachListStyles(tokens) {
    for (let i = 0; i < tokens.length - 1; i++) {
      const current = tokens[i];
      const next = tokens[i + 1];

      if (
        current.type === 'list' &&
        next.type === 'paragraph' &&
        Array.isArray(next.tokens) &&
        next.tokens.length === 1 &&
        next.tokens[0].type === 'styleAttributes'
      ) {
        const attrs = parseStyleAttrs(next.tokens[0].attrs); // same helper you already use
        current.styleAttrs = { ...(current.styleAttrs || {}), ...attrs };

        // Remove the style-only paragraph
        tokens.splice(i + 1, 1);
        i--; // adjust index
      }
    }

    // Optionally recurse into nested structures if you want list-in-list styling later
  }

  const walkTokens = (token) => {
    // Only blocks with inline content we care about right now
    if (token.type === 'heading' || token.type === 'paragraph') {
      if (Array.isArray(token.tokens)) {
        // 1) Inline: [link](#){: ... }
        attachInlineStyles(token.tokens);

        // 2) Block: ## Heading {: ... }
        attachBlockStyles(token);
      }
    }
  };

  // const styleAttributesExtension = {
  //   name: 'styleAttributes',
  //   level: 'inline',

  //   // Hint: where in the string should Marked even bother trying us?
  //   start(src) {
  //     // First occurrence of "{:" or -1 if not present
  //     return src.indexOf('{:');
  //   },

  //   tokenizer(src, tokens) {
  //     // Match: "{:" then any non-"}" characters, then "}"
  //     const rule = /^\{:\s*([^}]+)\}/;
  //     const match = rule.exec(src);

  //     if (!match) {
  //       return;
  //     }

  //     const raw = match[0]; // e.g. "{: color=red font-size=2rem }"
  //     const inner = match[1].trim(); // e.g. "color=red font-size=2rem"

  //     return {
  //       type: 'styleAttributes',
  //       raw,
  //       attrs: inner,
  //       tokens: [],
  //     };
  //   },
  // };

  const styleAttributesExtension = {
    name: 'styleAttributes',
    level: 'inline',
    start(src) {
      return src.indexOf('{:');
    },
    tokenizer(src, tokens) {
      const rule = /^\{:\s*([^}]+)\}/;
      const match = rule.exec(src);
      if (!match) return;

      const raw = match[0];
      const inner = match[1].trim();

      return {
        type: 'styleAttributes',
        raw,
        attrs: inner,
      };
    },
  };

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
  //   token.tokens = this.Lexer.lexInline(token.text);
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

  // set up our own heading

  const renderer = {
    paragraph,
    heading,
    link,
    list,
    image,
  };

  return { renderer, walkTokens, attachListStyles, styleAttributesExtension };
}

// styleAttributes.js
import { marked } from 'marked';

// --- inline extension: "{: ... }" → styleAttributes token ---
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

// --- helper: parse "color=red font-size=2rem" → { color: "red", "font-size": "2rem" } ---
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

const INLINE_STYLABLE_TYPES = new Set(['link']);

function attachInlineStyles(inlineTokens) {
  if (!Array.isArray(inlineTokens)) return;

  for (let i = 0; i < inlineTokens.length; i++) {
    const token = inlineTokens[i];

    if (token.type === 'styleAttributes') {
      const prev = inlineTokens[i - 1];

      if (prev && INLINE_STYLABLE_TYPES.has(prev.type)) {
        const attrs = parseStyleAttrs(token.attrs);
        prev.styleAttrs = Object.assign(prev.styleAttrs || {}, attrs);
        inlineTokens.splice(i, 1);
        i--;
      }
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
    inlineTokens.pop();
  }
}

const walkTokens = (token) => {
  if (token.type === 'heading' || token.type === 'paragraph') {
    if (Array.isArray(token.tokens)) {
      attachInlineStyles(token.tokens);
      attachBlockStyles(token);
    }
  }
};

marked.use({
  extensions: [styleAttributesExtension],
  walkTokens,
});

export { marked, walkTokens };

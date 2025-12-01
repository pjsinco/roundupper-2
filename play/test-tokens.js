// test-tokens.js
import { marked, walkTokens } from './styleAttributes.js';

const md = `
This is a [link](#){: color=blue font-weight=600 } inside a paragraph.

## Heading with style {: color=red font-size=2rem }
`;

const tokens = marked.lexer(md);

// This is the important part: run *your* walkTokens over the tree
marked.walkTokens(tokens, walkTokens);

console.log(JSON.stringify(tokens, null, 2));

import Constants from '@/constants/aoa-general';
import { marked } from 'marked';

// Turn { color: 'red', 'font-size': '2rem' } into 'color:red;font-size:2rem;'
function styleMapToString(styleAttrs) {
  if (!styleAttrs) return '';
  const entries = Object.entries(styleAttrs);
  if (!entries.length) return '';
  return entries.map(([key, value]) => `${key}:${String(value)}`).join(';');
}

// Escape for HTML attribute values (href, title, style chunks)
function escapeHtmlAttr(str) {
  return String(str).replace(/["&<>]/g, (ch) => {
    switch (ch) {
      case '"':
        return '&quot;';
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      default:
        return ch;
    }
  });
}

export function useExperimentalRenders() {
  function paragraph(token) {
    const inner = this.parser.parseInline(token.tokens || []);
    const styleStr = styleMapToString(token.styleAttrs);
    const styleAttr = styleStr ? `${escapeHtmlAttr(styleStr)}` : '';
    const newStyle = styleAttr.split(';');

    //return `
    //  <p style="margin: 0 0 0 0;">${text}<br>&nbsp;</p>\n`;
    const styles = [...new Set([...Constants.Styles.P_STYLE, ...newStyle])];
    return `
      <p style="${styles.join('; ')}">${inner}</p>`;
  }

  const heading = function (token) {
    const inner = this.parser.parseInline(token.tokens || []);
    const styleStr = styleMapToString(token.styleAttrs);
    const styleAttr = styleStr ? `${escapeHtmlAttr(styleStr)}` : '';
    const newStyle = styleAttr.split(';');

    // const newStyle = token.color ? [`color: ${token.color}`] : [];
    let styles;

    switch (token.depth) {
      case 1:
        styles = [...new Set([...Constants.Styles.H1_STYLE, ...newStyle])];
        return `<h1 style="${styles.join('; ')}">${inner}</h1>\n`;
        break;

      case 2:
        styles = [...new Set([...Constants.Styles.H2_STYLE, ...newStyle])];
        console.info('styles', styles);
        return `<h2 style="${styles.join('; ')}">${inner}</h1>\n`;
        break;

      case 3:
        styles = [...new Set([...Constants.Styles.H3_STYLE, ...newStyle])];
        return `<h3 style="${styles.join('; ')}">${inner}</h3>\n`;
        break;

      case 4:
        styles = [...new Set([...Constants.Styles.H4_STYLE, ...newStyle])];
        return `<h4 style="${styles.join('; ')}">${inner}</h4>\n`;
        break;

      case 5:
      default:
        styles = [...new Set([...Constants.Styles.H5_STYLE, ...newStyle])];
        return `<h5 style="${styles.join('; ')}">${inner}</h5>\n`;
        break;
    }
  };

  function link(token) {
    const inner = this.parser.parseInline(token.tokens || []);
    const href = token.href ? escapeHtmlAttr(token.href) : '';
    const titleAttr = token.title
      ? ` title="${escapeHtmlAttr(token.title)}"`
      : '';
    const styleStr = styleMapToString(token.styleAttrs);
    const styleAttr = styleStr ? `${escapeHtmlAttr(styleStr)}` : '';
    const newStyle = styleAttr.split(';');

    const styles = [...new Set([...Constants.Styles.LINK_STYLE, ...newStyle])];
    return `
      <a href="${href}" 
         style="${styles.join('; ')}"
         ${titleAttr}">${inner}</a>`;
  }

  // function list(body, ordered) {
  function list(token) {
    const ordered = token.ordered;
    const start = token.start;

    let body = '';
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }

    const divStyles = [
      'text-align: left',
      //'color: #141416',
      'margin: 0',
      'padding: 0',
      'font-family: Arial, sans-serif',
      'font-size: 16px',
      'font-weight: normal',
      'line-height: 24px',
    ];

    const listStyles = [
      //'color: #141416',
      'margin: 25px 0 25px 25px',
      'padding: 0',
      'font-family: Arial, sans-serif',
      'font-size: 16px',
      'line-height: 24p',
    ];

    const listType = ordered ? 'ol' : 'ul';
    const listStyleType = ordered ? '1' : 'disc';

    return `
      <div class="forOutlooks" pardot-region="unordered_list" style="${divStyles.join('; ')}">
        <${listType} 
          class="glist" 
          style="${listStyles.join('; ')}" 
          align="left" 
          type="${listStyleType}"
        >
          ${body}</ol>
        <${listType}></div>\n`;
  }

  // function image(href, title, text) {
  function image({ href, title, text, tokens }) {
    return `
      <img src="${href}" style="max-width: 600px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" title=${title} alt="${text}" />`;
  }
  //return `
  //<img src="${href}" style="max-width: 600px; border: 0; display: block; outline: none; text-decoration: none; height: auto; width: 100%; font-size: 13px;" title=${title} alt="${text}" />`;
  //}

  return {
    paragraph,
    heading,
    link,
    list,
    image,
  };
}

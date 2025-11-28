import Constants from '@/constants/aoa-general';
import { marked } from 'marked';

export function useAoaGeneralRenders() {
  function paragraph({ tokens }) {
    const text = this.parser.parseInline(tokens);
    //return `
    //  <p style="margin: 0 0 0 0;">${text}<br>&nbsp;</p>\n`;
    const pStyle = Constants.Styles.P_STYLE;
    return `
      <p style="${pStyle.join('; ')}">${text}</p>`;
  }

  function heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);

    switch (depth) {
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
  }

  function link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);

    const linkStyle = Constants.Styles.LINK_STYLE.join('; ');
    return `
      <a href="${href}" 
         style="${linkStyle}"
         title="${title}">${text}</a>`;
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

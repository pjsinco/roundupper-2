import Constants from '@/constants/affiliate-news';

export function useAffiliateNewsRenders(opts = { forToc: false, }) {
	console.log('opts1', opts);
  function paragraph(text) {
    const pStyle = Constants.Styles.P_STYLE;
    return `
      <p style="${pStyle.join('; ')}">${text}</p>`;
  }

  function heading(text, level) {
    switch (level) {
      default:
      case 3:
        const h3Style = Constants.Styles.H3_STYLE;
        return `<h3 style="${h3Style.join('; ')}">${text}</h3>\n`;
        break;

      case 4:
        const h4Style = Constants.Styles.H4_STYLE;
        return `<h4 style="${h4Style.join('; ')}">${text}</h4>\n`;
        break;
    }
  }

  function image(href, title, text) {
    return `<img src="${href}" alt="${text}" class="img" />`;
  }

  function link(href, title, text) {
    const linkStyle = Constants.Styles.LINK_STYLE.join('; ');
    return `
      <a href="${href}" 
         style="${linkStyle}"
         title="${title}">${text}</a>`;
  }

  function list(body, ordered) {
    const divStyles = Constants.Styles.LIST_DIV_STYLE;
		let listStyles

		if (opts.forToc) {
			listStyles = Constants.Styles.LIST_STYLE_TOC;
		} else {
			listStyles = Constants.Styles.LIST_STYLE;
		}

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

  return {
    paragraph,
    heading,
    link,
    list,
    image,
  };
}

import{C as s}from"./index-q_ibDTZ2.js";import"./marked.esm-Ajh4Nhzb.js";function f(){function y({tokens:e}){const n=this.parser.parseInline(e);return`
      <p style="${s.Styles.P_STYLE.join("; ")}">${n}</p>`}function h({tokens:e,depth:n}){const t=this.parser.parseInline(e);switch(n){case 1:return`<h1 style="${s.Styles.H1_STYLE.join("; ")}">${t}</h1>
`;case 2:return`<h2 style="${s.Styles.H2_STYLE.join("; ")}">${t}</h1>
`;case 3:return`<h3 style="${s.Styles.H3_STYLE.join("; ")}">${t}</h3>
`;case 4:return`<h4 style="${s.Styles.H4_STYLE.join("; ")}">${t}</h4>
`;case 5:default:return`<h5 style="${s.Styles.H5_STYLE.join("; ")}">${t}</h5>
`}}function c({href:e,title:n,tokens:t}){const i=this.parser.parseInline(t),l=s.Styles.LINK_STYLE.join("; ");return`
      <a href="${e}" 
         style="${l}"
         title="${n}">${i}</a>`}function p(e){const n=e.ordered;e.start;let t="";for(let o=0;o<e.items.length;o++){const $=e.items[o];t+=this.listitem($)}const i=["text-align: left","margin: 0","padding: 0","font-family: Arial, sans-serif","font-size: 16px","font-weight: normal","line-height: 24px"],l=["margin: 25px 0 25px 25px","padding: 0","font-family: Arial, sans-serif","font-size: 16px","line-height: 24p"],r=n?"ol":"ul",a=n?"1":"disc";return`
      <div class="forOutlooks" pardot-region="unordered_list" style="${i.join("; ")}">
        <${r} 
          class="glist" 
          style="${l.join("; ")}" 
          align="left" 
          type="${a}"
        >
          ${t}</ol>
        <${r}></div>
`}function S({href:e,title:n,text:t,tokens:i}){return`
      <img src="${e}" style="max-width: 600px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" title=${n} alt="${t}" />`}return{paragraph:y,heading:h,link:c,list:p,image:S}}export{f as u};

import{a as y}from"./styles-CdZLIzjF.js";const s={DEFAULT_TEXT_MARKDOWN:"**Lorem ipsum dolor** sit amet, consectetur adipisicing elit, sed do eiusmod [tempor incididunt](https://osteopathic.org) ut labore et dolore magna aliqua.",DEFAULT_HEADER_URL:"https://resources.osteopathic.org/l/979203/2024-02-01/czs3n/979203/17067972618vJSBE23/placeholder_100px.png",DEFAULT_ICON_SM:"https://resources.osteopathic.org/l/979203/2026-03-10/pcnbl/979203/1773153682NAmNBE80/placeholder_circle_42.png",DEFAULT_ICON_MD:"https://resources.osteopathic.org/l/979203/2026-03-10/pcnbp/979203/1773153743btAsSs8Y/placeholder_circle_100.png",DEFAULT_ICON_LG:"https://resources.osteopathic.org/l/979203/2026-03-10/pczcl/979203/1773173622eADrdJRg/placeholder_circle_158.png",Styles:y};function d(){function r(t){return`
      <p style="${s.Styles.P_STYLE.join("; ")}">${t}</p>`}function a(t,e){switch(e){case 1:return`<h1 style="${s.Styles.H1_STYLE.join("; ")}">${t}</h1>
`;case 2:return`<h2 style="${s.Styles.H2_STYLE.join("; ")}">${t}</h1>
`;case 3:return`<h3 style="${s.Styles.H3_STYLE.join("; ")}">${t}</h3>
`;case 4:return`<h4 style="${s.Styles.H4_STYLE.join("; ")}">${t}</h4>
`;case 5:default:return`<h5 style="${s.Styles.H5_STYLE.join("; ")}">${t}</h5>
`}}function c(t,e,n){const l=s.Styles.LINK_STYLE.join("; ");return`
      <a href="${t}" 
         style="${l}"
         title="${e}">${n}</a>`}function p(t,e){const n=["text-align: left","margin: 0","padding: 0","font-family: Arial, sans-serif","font-size: 16px","font-weight: normal","line-height: 24px"],l=["margin: 25px 0 25px 25px","padding: 0","font-family: Arial, sans-serif","font-size: 16px","line-height: 24p"],o=e?"ol":"ul",i=e?"1":"disc";return`
      <div class="forOutlooks" pardot-region="unordered_list" style="${n.join("; ")}">
        <${o} 
          class="glist" 
          style="${l.join("; ")}" 
          align="left" 
          type="${i}"
        >
          ${t}</ol>
        <${o}></div>
`}function h(t,e,n){return`
      <img src="${t}" style="max-width: 600px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" title=${e} alt="${n}" />`}return{paragraph:r,heading:a,link:c,list:p,image:h}}export{s as C,d as u};

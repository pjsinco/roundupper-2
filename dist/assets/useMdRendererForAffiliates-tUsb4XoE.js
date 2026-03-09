import{C as n}from"./index-bQRmu1Dj.js";function u(i={forToc:!1}){console.log("opts1",i);function o(t){return`
      <p style="${n.Styles.P_STYLE.join("; ")}">${t}</p>`}function r(t,e){switch(e){default:case 3:return`<h3 style="${n.Styles.H3_STYLE.join("; ")}">${t}</h3>
`;case 4:return`<h4 style="${n.Styles.H4_STYLE.join("; ")}">${t}</h4>
`}}function c(t,e,s){return`<img src="${t}" alt="${s}" class="img" />`}function a(t,e,s){const l=n.Styles.LINK_STYLE.join("; ");return`
      <a href="${t}" 
         style="${l}"
         title="${e}">${s}</a>`}function S(t,e){const s=n.Styles.LIST_DIV_STYLE;let l;i.forToc?l=n.Styles.LIST_STYLE_TOC:l=n.Styles.LIST_STYLE;const y=e?"ol":"ul",f=e?"1":"disc";return`
          <div class="forOutlooks" pardot-region="unordered_list" style="${s.join("; ")}">
            <${y} 
              class="glist" 
              style="${l.join("; ")}" 
              align="left" 
              type="${f}"
            >
              ${t}</ol>
            <${y}></div>
`}return{paragraph:o,heading:r,link:a,list:S,image:c}}function T(i={forToc:!1}){const{paragraph:o,heading:r,link:c,list:a,image:S}=u(i);return{paragraph:o,heading:r,link:c,list:a,image:S}}export{T as g};

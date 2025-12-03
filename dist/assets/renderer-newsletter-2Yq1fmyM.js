import{C as t}from"./index-6oK_k6Xu.js";import{u as o}from"./styles-base-aoa-general-1f0smVJD.js";function p(){const{paragraph:s,list:a}=o();return{renderer:{paragraph:s,list:a,link(e,l,r){const n=t.Styles.LINK_STYLE;return`
        <a href="${e}" 
           style="${n.join("; ")}"
           title="${l}">${r}</a>`},heading(e,l){switch(l){case 1:return`<h1 style="${t.Styles.H1_STYLE.join("; ")}">${e}</h1>
`;case 2:return`<h2 style="${t.Styles.H2_STYLE.join("; ")}">${e}</h1>
`;case 3:return`<h3 style="${t.Styles.H3_STYLE.join("; ")}">${e}</h3>
`;case 4:return`<h4 style="${t.Styles.H4_STYLE.join("; ")}">${e}</h4>
`;case 5:default:return`<h5 style="${t.Styles.H5_STYLE.join("; ")}">${e}</h5>
`}},image(e,l,r){return`
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
          <tr>
            <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                <tr>
                  <td class="td-image-parent" style="width: 100%">
                    <img src="${e}" style="width: 100%; max-width: 528px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" height="auto" title=${l} alt="${r}" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`}}}}export{p as u};

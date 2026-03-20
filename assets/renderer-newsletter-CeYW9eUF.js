import{S as o}from"./styles-CX3d9h40.js";import{u as i}from"./styles-base-aoa-general-D_tARdDJ.js";const c={liveAreaWidth:528},t={DEFAULT_TEXT_MD:`Fusce dapibus, **tellus ac cursus commodo,** tortor mauris condimentum nibh, ut fermentum *massa* justo [Osteopathic.org](https://osteopathic.org). Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum.
`,Styles:o,Layout:c};function m(){const{paragraph:n,list:a}=i();return{renderer:{paragraph:n,list:a,link(e,s,r){const l=t.Styles.LINK_STYLE;return`
        <a href="${e}" 
           style="${l.join("; ")}"
           title="${s}">${r}</a>`},heading(e,s){switch(s){case 1:return`<h1 style="${t.Styles.H1_STYLE.join("; ")}">${e}</h1>
`;case 2:return`<h2 style="${t.Styles.H2_STYLE.join("; ")}">${e}</h1>
`;case 3:return`<h3 style="${t.Styles.H3_STYLE.join("; ")}">${e}</h3>
`;case 4:return`<h4 style="${t.Styles.H4_STYLE.join("; ")}">${e}</h4>
`;case 5:default:return`<h5 style="${t.Styles.H5_STYLE.join("; ")}">${e}</h5>
`}},image(e,s,r){return`
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
          <tr>
            <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                <tr>
                  <td class="td-image-parent" style="width: 100%">
                    <img src="${e}" style="width: 100%; max-width: 528px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" height="auto" title=${s} alt="${r}" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`}}}}export{t as C,m as u};

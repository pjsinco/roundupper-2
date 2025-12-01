import{b as l,a as c}from"./index-q_ibDTZ2.js";import{u as h}from"./styles-base-aoa-general-1f0smVJD.js";const{P_STYLE:d,H1_STYLE:u}=c,r=["margin-bottom: 0px","margin-top: 0",`font-family: ${l.fontFamily}`,"font-size: 18px","font-weight: bold","line-height: 25.2px","text-align: left",`color: ${l.colors.headline}`],y={P_STYLE:d,H1_STYLE:u,LINK_STYLE:[`color: ${l.colors.primary}`,"font-weight: inherit","text-decoration: underline"],H2_STYLE:r,H3_STYLE:r,H4_STYLE:["margin-bottom: 0px","margin-top: 0",`font-family: ${l.fontFamily}`,"font-size: 16px","font-weight: bold","line-height: 24px","text-align: left",`color: ${l.colors.headline}`],H5_STYLE:r},p={fullWidth:600,liveAreaWidth:528},e={DEFAULT_TEXT_MD:`Fusce dapibus, **tellus ac cursus commodo,** tortor mauris condimentum nibh, ut fermentum *massa* justo [Osteopathic.org](https://osteopathic.org). Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas faucibus mollis interdum.
`,Styles:y,Layout:p};function L(){const{paragraph:a,list:i}=h();return{renderer:{paragraph:a,list:i,link(t,o,n){const s=e.Styles.LINK_STYLE;return`
        <a href="${t}" 
           style="${s.join("; ")}"
           title="${o}">${n}</a>`},heading(t,o){switch(o){case 1:return`<h1 style="${e.Styles.H1_STYLE.join("; ")}">${t}</h1>
`;case 2:return`<h2 style="${e.Styles.H2_STYLE.join("; ")}">${t}</h1>
`;case 3:return`<h3 style="${e.Styles.H3_STYLE.join("; ")}">${t}</h3>
`;case 4:return`<h4 style="${e.Styles.H4_STYLE.join("; ")}">${t}</h4>
`;case 5:default:return`<h5 style="${e.Styles.H5_STYLE.join("; ")}">${t}</h5>
`}},image(t,o,n){return`
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
          <tr>
            <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                <tr>
                  <td class="td-image-parent" style="width: 100%">
                    <img src="${t}" style="width: 100%; max-width: 528px; border: 0; display: block; outline: none; text-decoration: none; height: auto; font-size: 13px;" height="auto" title=${o} alt="${n}" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`}}}}export{e as C,L as u};

/**
 *
 * Replaces instances of span#mso_[n].
 *
 * Ex.: span#mso_0 ... span#mso_1
 *
 */
export function replaceMsoPlaceholders(replacements = [], loops = 1) {
  return function (html) {
    const regex = /<span.?id="mso_\d"><\/span>/gm;
    const targets = [...html.matchAll(regex)];

    console.log(
      `Found ${targets.length} targets for ${replacements.length} replacements`
    );

    // Handle cases when we have more than one component with mso-replacements.
    // This is the case when components can have an arbitrary number, like IconList.
    for (let i = 0; i < loops; i++) {
      for (let j = 0, len = replacements.length; j < len; j++) {
        html = html.replace(targets[j], replacements[j]);
      }
    }

    return html;
  };
}

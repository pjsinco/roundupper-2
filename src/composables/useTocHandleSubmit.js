export default function useTocHandleSubmit(editor) {
  const handleSubmit = async function () {
    isLoading.value = true;
    error.value = '';
    reactions.value = reaction.nervous;

    //const url = 'http://localhost:5001/toc';
    const url = 'https://andthatproveswhat.com/roundupper-api/toc';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urlToFetch.value }),
      });
      const body = await response.text();

      input.value = `${defaultTocInput}\n${JSON.parse(body).data.join('\n')}`;

      nextTick(() => {
        editor.setValue(input.value);
        editor.focus();

        editor.setCursor({ line: 0, ch: 0 });
      });

      haveToc.value = true;
      reaction.value = reactions.testTube;
    } catch (err) {
      /* handle error */
      console.error(err);
      reaction.value = reactions.sad;

      haveToc.value = false;
      error.value = 'Error fetching TOC';
    } finally {
      isLoading.value = false;
    }
  };

  return { handleSubmit };
}

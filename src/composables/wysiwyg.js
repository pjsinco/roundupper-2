export function useWysiwyg() {
  function makeLink(editor) {
    const selection = editor.getSelection();

    // We need a selection in order to make a link
    if (selection === '') {
      return;
    }

    // Make sure there are no new-lines in selection
    if (selection.indexOf('\n') > 0) {
      return;
    }

    const { line, ch } = editor.getCursor('anchor');

    // Check immediately-surrounding chars to see if
    // they're [ && ], which would mean there's already
    // a link there.
    const { open, close } = getSurrounding(
      editor,
      line,
      ch,
      ch + selection.length
    );

    console.log('open, close', open, close);

    if (open == '[' && close == ']') {
      return;
    }

    const startOfStrToHighlight = ch + selection.length + ']('.length + 1;
    const endOfStrToHighlight = startOfStrToHighlight + 'url'.length;

    editor.replaceSelection('[' + selection + '](url)');
    editor.setSelection(
      { line, ch: startOfStrToHighlight },
      { line, ch: endOfStrToHighlight }
    );
    editor.focus();
  }

  function surround(
    editor,
    str,
    cursorPos,
    prefix,
    suffix,
    setNewSelection = true
  ) {
    const { line, ch } = cursorPos;

    if (str === '') {
      editor.replaceSelection(prefix + suffix);
      editor.setCursor({ line, ch: ch + prefix.length });
    } else {
      editor.replaceSelection(`${prefix}${str}${suffix}`);

      if (setNewSelection) {
        editor.setSelection(
          { line, ch: ch + prefix.length },
          { line, ch: ch + suffix.length + str.length }
        );
      }
    }
  }

  /**
   * Get immediately-surrounding characters
   *
   */
  function getSurrounding(
    editor,
    line,
    chStart,
    chEnd,
    countBefore = 1,
    countAfter = 1
  ) {
    const checkRange = editor.getRange(
      { line, ch: chStart - countBefore },
      { line, ch: chEnd + countAfter },
      '\n'
    );
    console.log('checkRange', checkRange);
    const firstChar = checkRange.slice(0, countBefore);
    const lastChar = checkRange.slice(-countAfter);

    return {
      open: firstChar,
      close: lastChar,
    };
  }

  function makeBold(editor) {
    const selection = editor.getSelection();
    const cursorStart = editor.getCursor('anchor');

    const { open, close } = getSurrounding(
      editor,
      cursorStart.line,
      cursorStart.ch,
      cursorStart.ch + selection.length,
      2,
      2
    );

    const notAllowed = '**';
    if (open == notAllowed && close == notAllowed) {
      return;
    }

    surround(editor, selection, cursorStart, '**', '**');

    editor.focus();
  }

  function removeBold(editor) {
    editor.extendSelection(
      { line: cursorStart.line, ch: cursorStart.ch - 3 },
      { line: cursorStart.line, ch: cursorStart.ch + selection.length + 3 }
    );
    const newSelection = editor.getSelection();
    editor.replaceSelection(newSelection.slice(2).slice(0, -2));
    editor.setSelection(
      { line: cursorStart.line, ch: cursorStart.ch - 2 },
      { line: cursorStart.line, ch: cursorStart.ch + selection.length - 2 }
    );
  }

  /**
   * ITALIC
   *   is it:
   *      already italic and bold (***)? remove italics (**)
   *      already bold            (**)?  add italics    (***)
   *      already italic          (*)?   remove italics ()
   *      not italic?             ()     add italics    (*)
   *
   * BOLD
   *   is it:
   *      already italic and bold? (***)? remove bold (*)
   *      already bold             (**)?  remove bold ()
   *      already italic           (*)?   add bold    (***)
   *      not bold?                ()     add bold    (**)
   *
   * ABSTRACTION
   *   itself I
   *   other  O
   *   is it?
   *      already itself and the other? (IO) remove itself (O)
   *      already itself?               (I)  remove itself ()
   *      already the other?            (O)  add itself (OI)
   *      not itself?                   ()   add itself (I)
   */
  function makeFontStyle(editor, style = 'bold') {
    const selection = editor.getSelection('\n');
    const cursorStart = editor.getCursor('anchor');
    let atEndOfLine = false;
    let countBefore = 3;
    let countAfter = 3;

    if (style == 'italic') {
      countBefore = 3;
      countAfter = 3;
    } else if (style == 'bold') {
      countBefore = 2;
      countAfter = 2;
    }

    const { line: endline, ch: endch } = editor.getCursor('to');

    // We're not handling multiline
    if (endline > cursorStart.line) {
      return;
    }

    // check if we're at the end of
    const lineLength = editor.getLine(cursorStart.line).length;
    const charsLeftInLine = lineLength - (cursorStart.ch + selection.length);
    if (charsLeftInLine < countAfter) {
      atEndOfLine = true;
      countBefore = charsLeftInLine;
      countAfter = charsLeftInLine;
    }

    // check if we're at the beginning of a line
    if (cursorStart.ch < countBefore) {
      countBefore = cursorStart.ch;
    }

    let { open, close } = getSurrounding(
      editor,
      cursorStart.line,
      cursorStart.ch,
      endch,
      countBefore,
      countAfter
    );

    console.log('open, close');
    console.log(`|${open}|      |${close}|`);

    if (style == 'italic') {
      if (atEndOfLine) {
        if (open === '**' && close == '**') {
          // add ital to already-bolded
          surround(editor, selection, cursorStart, '*', '*');
        } else if (open.slice(-1) === '*' && close.slice(0, 1) === '*') {
          // already italic, so unitalicize
          editor.extendSelection(
            { line: cursorStart.line, ch: cursorStart.ch - 1 },
            {
              line: cursorStart.line,
              ch: cursorStart.ch + selection.length + 1,
            }
          );
          const newSelection = editor.getSelection();
          editor.replaceSelection(newSelection.slice(1).slice(0, -1));
          editor.setSelection(
            { line: cursorStart.line, ch: cursorStart.ch - 1 },
            {
              line: cursorStart.line,
              ch: cursorStart.ch + selection.length - 1,
            }
          );
        } else {
          // ital it
          surround(editor, selection, cursorStart, '*', '*');
        }

        editor.focus();
        return;
      }

      if (open === '***' && close === '***') {
        // is it already bold-italic?
        console.log('already bold ital, so remove ital');

        // remove italics
        editor.extendSelection(
          { line: cursorStart.line, ch: cursorStart.ch - 3 },
          { line: cursorStart.line, ch: cursorStart.ch + selection.length + 3 }
        );
        const newSelection = editor.getSelection();
        editor.replaceSelection(newSelection.slice(1).slice(0, -1));
        editor.setSelection(
          { line: cursorStart.line, ch: cursorStart.ch - 1 },
          { line: cursorStart.line, ch: cursorStart.ch + selection.length - 1 }
        );
      } else if (open.slice(1, 3) === '**' && close.slice(0, 2) == '**') {
        // is it already bold?
        console.log('already bold, so add ital');

        // add ital to already-bolded
        surround(editor, selection, cursorStart, '*', '*');
      } else if (open.slice(-1) === '*' && close.slice(0, 1) == '*') {
        // is it already italic?
        console.log('already italic, so unitalicize');

        // already italic, so unitalicize
        editor.extendSelection(
          { line: cursorStart.line, ch: cursorStart.ch - 1 },
          { line: cursorStart.line, ch: cursorStart.ch + selection.length + 1 }
        );
        const newSelection = editor.getSelection();
        editor.replaceSelection(newSelection.slice(1).slice(0, -1));
        editor.setSelection(
          { line: cursorStart.line, ch: cursorStart.ch - 1 },
          { line: cursorStart.line, ch: cursorStart.ch + selection.length - 1 }
        );
      } else {
        // ok, just make it italic
        console.log('just make it ital');

        surround(editor, selection, cursorStart, '*', '*');
      }
    } else if (style == 'bold') {
      if (atEndOfLine) {
        if (open === '**' && close == '**') {
          // already bolded, so unbold
          editor.extendSelection(
            { line: cursorStart.line, ch: cursorStart.ch - 2 },
            {
              line: cursorStart.line,
              ch: cursorStart.ch + selection.length + 2,
            }
          );
          const newSelection = editor.getSelection();
          editor.replaceSelection(newSelection.slice(2).slice(0, -2));
          editor.setSelection(
            { line: cursorStart.line, ch: cursorStart.ch - 2 },
            {
              line: cursorStart.line,
              ch: cursorStart.ch + selection.length - 2,
            }
          );
        } else if (open.slice(-1) === '*' && close.slice(0, 1) === '*') {
          // already italic, so bold
          surround(editor, selection, cursorStart, '**', '**');
        } else {
          // bold it
          surround(editor, selection, cursorStart, '**', '**');
        }

        editor.focus();
        return;
      }

      if (open === '***' && close === '***') {
        // is it already bold-italic?
        console.log('already bold ital, so remove bold');

        // remove bold
        removeBold(editor);
      } else if (open.slice(1, 3) === '**' && close.slice(0, 2) == '**') {
        // is it already bold?
        console.log('already bold, so remove bold');
        removeBold(editor);
      } else if (open.slice(-1) === '*' && close.slice(0, 1) == '*') {
        // is it already italic?
        console.log('already italic, so bold');

        // already italic, so bold
        surround(editor, selection, cursorStart, '**', '**');
      } else {
        // ok, just make it bold
        console.log('just make it bold');

        surround(editor, selection, cursorStart, '**', '**');
      }
    }

    editor.focus();
  }

  function makeItalic(editor) {
    const selection = editor.getSelection('\n');
    const cursorStart = editor.getCursor('anchor');
    let atEndOfLine = false;
    let countBefore = 3;
    let countAfter = 3;

    const { line: endline, ch: endch } = editor.getCursor('to');

    // We're not handling multiline
    if (endline > cursorStart.line) {
      return;
    }

    // check if we're at the end of
    const lineLength = editor.getLine(cursorStart.line).length;
    const charsLeftInLine = lineLength - (cursorStart.ch + selection.length);
    if (charsLeftInLine < 3) {
      atEndOfLine = true;
      countBefore = charsLeftInLine;
      countAfter = charsLeftInLine;
    }

    // check if we're at the beginning of a line
    if (cursorStart.ch < 3) {
      countBefore = cursorStart.ch;
    }

    let { open, close } = getSurrounding(
      editor,
      cursorStart.line,
      cursorStart.ch,
      endch,
      countBefore,
      countAfter
    );

    console.log('open, close');
    console.log(`|${open}|      |${close}|`);

    // check if we're at the end of a line

    if (atEndOfLine) {
      if (open === '**' && close == '**') {
        // add ital to already-bolded
        surround(editor, selection, cursorStart, '*', '*');
      } else if (open.slice(-1) === '*' && close.slice(0, 1) === '*') {
        // already italic, so unitalicize
        editor.extendSelection(
          { line: cursorStart.line, ch: cursorStart.ch - 1 },
          { line: cursorStart.line, ch: cursorStart.ch + selection.length + 1 }
        );
        const newSelection = editor.getSelection();
        editor.replaceSelection(newSelection.slice(1).slice(0, -1));
        editor.setSelection(
          { line: cursorStart.line, ch: cursorStart.ch - 1 },
          { line: cursorStart.line, ch: cursorStart.ch + selection.length - 1 }
        );
      } else {
        // ital it
        surround(editor, selection, cursorStart, '*', '*');
      }

      editor.focus();
      return;
    }

    if (open === '***' && close === '***') {
      // is it already bold-italic?
      console.log('already bold ital, so remove ital');

      // remove italics
      editor.extendSelection(
        { line: cursorStart.line, ch: cursorStart.ch - 3 },
        { line: cursorStart.line, ch: cursorStart.ch + selection.length + 3 }
      );
      const newSelection = editor.getSelection();
      editor.replaceSelection(newSelection.slice(1).slice(0, -1));
      editor.setSelection(
        { line: cursorStart.line, ch: cursorStart.ch - 1 },
        { line: cursorStart.line, ch: cursorStart.ch + selection.length - 1 }
      );
    } else if (open.slice(1, 3) === '**' && close.slice(0, 2) == '**') {
      // is it already bold?
      console.log('already bold, so add ital');

      // add ital to already-bolded
      surround(editor, selection, cursorStart, '*', '*');
    } else if (open.slice(-1) === '*' && close.slice(0, 1) == '*') {
      // is it already italic?
      console.log('already italic, so unitalicize');

      // already italic, so unitalicize
      editor.extendSelection(
        { line: cursorStart.line, ch: cursorStart.ch - 1 },
        { line: cursorStart.line, ch: cursorStart.ch + selection.length + 1 }
      );
      const newSelection = editor.getSelection();
      editor.replaceSelection(newSelection.slice(1).slice(0, -1));
      editor.setSelection(
        { line: cursorStart.line, ch: cursorStart.ch - 1 },
        { line: cursorStart.line, ch: cursorStart.ch + selection.length - 1 }
      );
    } else {
      // ok, just make it italic
      console.log('just make it ital');

      surround(editor, selection, cursorStart, '*', '*');
    }

    editor.focus();
  }

  return {
    makeLink,
    makeBold,
    makeItalic,
    makeFontStyle,
  };
}

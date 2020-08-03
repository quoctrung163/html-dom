// query the elements
const copyButton = document.getElementById('copyButton');
const codeEle = document.getElementById('sampleCode');

copyButton.addEventListener('click', () => {
  const selection = window.getSelection();

  // save the current selection
  const currentRange = selection.rangeCount === 0 ? null : selection.getRangeAt(0);

  // select the text content of code element
  const range = document.createRange();
  range.selectNodeContents(codeEle);
  selection.removeAllRanges();
  selection.addRange(range);

  // copy to the clipboard
  try {
    document.execCommand('copy');
    copyButton.innerHTML = 'Copied';
  } catch (err) {
    // unable to copy
    copyButton.innerHTML = 'Copy';
  } finally {
    // restore the previous selection
    selection.removeAllRanges();
    currentRange && selection.addRange(currentRange);
  }
});
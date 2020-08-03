// create a fake textarea
const textArea2 = document.getElementById('textarea2');
const textAreaEle = document.createElement('textarea');

// reset styles
textAreaEle.style.border = '0';
textAreaEle.style.padding = '0';
textAreaEle.style.margin = '0';

// set the absolute position
// user won't see the element
textAreaEle.style.position = 'absolute';
textAreaEle.style.left = '-9999px';
textAreaEle.style.top = `0px`;

// set the value
textAreaEle.value = 'text';

// append the textarea to body
document.body.appendChild(textAreaEle);

// focus and select the text
textAreaEle.focus();
textAreaEle.select();

// execute the 'copy' command
try {
  document.execCommand('copy');
} catch (err) {
  console.log(err);
} finally {
  // remove the textarea
  document.body.removeChild(textAreaEle);
}
const element = document.getElementById('element');
const sizeWithoutPaddingBorder = document.getElementById('sizeWithoutPaddingBorder');
const sizeIncludePaddingBorder = document.getElementById('sizeIncludePaddingBorder');
const sizeIncludeAll = document.getElementById('sizeIncludeAll');

// get the styles
const styles = window.getComputedStyle(element);


// the size without padding and border
const height = element.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);

const width = element.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);

sizeWithoutPaddingBorder.innerText = `width=${width} & height=${height}`;

// the size include padding
const clientHeight = element.clientHeight;
const clientWidth = element.clientWidth;

sizeIncludePaddingBorder.innerHTML = `<div style="color:red">${clientHeight} & ${clientWidth}</div>`
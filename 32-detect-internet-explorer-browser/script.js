const element = document.getElementById('element');

const isIe = () => {
  const ua = window.navigator.userAgent;
  return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1;
}

if (isIe === (!!document.documentMode)) {
  element.innerText = 'this is a ie'
} else {
  element.innerText = 'not a IE Browser'
} 
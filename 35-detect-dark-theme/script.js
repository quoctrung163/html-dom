const element = document.getElementById('element');
const isDarkMode = window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log(isDarkMode);

isDarkMode === true ? element.innerText = 'true' : element.innerText = 'false'
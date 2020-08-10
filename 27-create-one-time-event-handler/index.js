const element = document.getElementById('element');

const handler = function (e) {
  alert('hellllllllo woooooooooooooord!');
}

element.addEventListener('click', handler, { once: true });
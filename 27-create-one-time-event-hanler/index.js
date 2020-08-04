const element = document.getElementById('element');

const handler = function (e) {
  // the event handler
  console.log('hello world');
}

element.addEventListener('click', handler, { once: true });
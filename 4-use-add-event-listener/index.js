const handler = function () {
  console.log(`<div>hello word</div>`);
};

const element = document.getElementById('button');

// attact handle to the `click` event
element.addEventListener('click', handler);

// detach handle from the `click` event
// element.removeEventListener('click', handler);
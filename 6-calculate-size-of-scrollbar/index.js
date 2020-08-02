// caculate scroolbar width
const scrollbarWidth = document.body.offsetWidth - document.body.clientWidth;

const calculateScrollbarWidth = function () {
  // create the parent element
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';

  // append it to `body`
  document.body.appendChild(outer);

  // create the child element
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // caculate the difference between their widths
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // remote the parent element
  document.body.removeChild(outer);
  console.log(scrollbarWidth);
  return scrollbarWidth;
}

const element = document.getElementById('div2');

// attact handle to the `click` event
element.addEventListener('click', calculateScrollbarWidth);
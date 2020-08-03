const element = document.getElementById('id');

// check is an element is scrollable

const isScrollable = function (element) {
  // compare the height to see if the element has scrollable content
  const hasScrollableContent = element.scrollHeight > element.clientHeight;

  const overflowYStyle = window.getComputedStyle(element).overflowY;
  const isOverflowHiddent = overflowYStyle.indexOf('hidden') !== -1;

  return hasScrollableContent && !isOverflowHiddent;
}

console.log(isScrollable(element)); // false
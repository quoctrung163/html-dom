const parent = document.getElementById('parent');
const child = document.getElementById('child');
const other = document.getElementById('id');

const isVisible = function (ele, container) {
  const eleTop = ele.offsetTop;
  const eleBottom = eleTop + ele.clientHeight;

  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;

  // the element is fully visible in the container
  return (eleTop >= containerTop && eleBottom <= containerBottom) ||
    // some part of the element is visible in the container
    (eleTop < containerTop && containerTop < eleBottom) ||
    (eleTop < containerBottom && containerBottom < eleBottom);
}

console.log(isVisible(child, parent)); // true

console.log(isVisible(other, parent)); // false
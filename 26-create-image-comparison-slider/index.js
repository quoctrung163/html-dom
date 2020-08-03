document.addEventListener('DOMContentLoaded', function () {
  // query the element
  const resizer = document.getElementById('dragMe');
  const leftSide = resizer.previousElementSibling;
  const rightSide = resizer.nextElementSibling;

  // the current position of mouse
  let x = 0;
  let y = 0;
  let leftWidth = 0;

  // handle the mousedown event
  // that's triggerd when user drags the resizer
  const mouseDownHandler = function (e) {
    // get the current mouse pos
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };


  const mouseMoveHandler = function (e) {
    // how far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY = y;

    let newLeftWidth = (leftWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);

    leftSide.style.width = `${newLeftWidth}%`;
    resizer.style.left = `${newLeftWidth}%`;

    resizer.style.cursor = 'col-resize';
    resizer.parentNode.style.cursor = 'col-resize';


    leftSide.style.userSelect = 'none';
    leftSide.style.pointerEvents = 'none';

    rightSide.style.userSelect = 'none';
    rightSide.style.pointerEvents = 'none';
  };


  const mouseUpHandler = function () {
    resizer.style.removeProperty('cursor');
    resizer.parentNode.style.removeProperty('cursor');

    leftSide.style.removeProperty('user-select');
    leftSide.style.removeProperty('pointer-events');

    rightSide.style.removeProperty('user-select');
    rightSide.style.removeProperty('pointer-events');

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  resizer.addEventListener('mousedown', mouseDownHandler);
});
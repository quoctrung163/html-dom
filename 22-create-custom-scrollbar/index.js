document.addEventListener('DOMContentLoaded', function () {
  // query elements
  const wrapper = document.getElementById('wrapper');
  const content = document.getElementById('content');
  const anchor = document.getElementById('anchor');
  const scrollbar = document.getElementById('scrollbar');
  const track = document.getElementById('track');
  const thumb = document.getElementById('thumb');

  // get the bounding rectangles
  const wrapperRect = wrapper.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();

  // set the scollbar pos
  const top = wrapperRect.top - anchorRect.top;
  const left = wrapperRect.width + wrapperRect.left - anchorRect.left;
  scrollbar.style.top = `${top}px`;
  scrollbar.style.left = `${left}px`;

  // the scrollar has the same height as the wrapper
  scrollbar.style.height = `${wrapperRect.height}px`;

  // set the initial height for thumb
  const scrollRatio = content.clientHeight / content.scrollHeight;
  thumb.style.height = `${scrollRatio * 100}%`;

  let pos = { top: 0, y: 0 };

  const mouseDownThumbHandler = function (e) {
    pos = {
      // The current scroll 
      top: content.scrollTop,
      // Get the current mouse position
      y: e.clientY,
    };

    thumb.classList.add('grabbing');
    document.body.classList.add('grabbing');

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dy = e.clientY - pos.y;

    // Scroll the content
    content.scrollTop = pos.top + dy / scrollRatio;
  };

  const mouseUpHandler = function (e) {
    thumb.classList.remove('grabbing');
    document.body.classList.remove('grabbing');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  const scrollContentHandler = function () {
    window.requestAnimationwFrame(function () {
      thumb.style.top = `${content.scrollTop * 100 / content.scrollHeight}%`;
    });
  };

  const trackClickHandler = function (e) {
    const bound = track.getBoundingClientRect();
    const percentage = (e.clientY - bound.top) / bound.height;
    content.scrollTop = percentage * (content.scrollHeight - content.clientHeight);
  };

  content.addEventListener('scroll', scrollContentHandler);
  thumb.addEventListener('mousedown', mouseDownThumbHandler);
  track.addEventListener('click', trackClickHandler);
})
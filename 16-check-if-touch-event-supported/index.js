const touchSupported = 'ontouchstart' in window ||
  (window.DocumentTouch && document instanceof DocumentTouch);


console.log(touchSupported);
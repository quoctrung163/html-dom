// change the website
const setFavicon = url => {
  // find the current favicon element
  const favicon = document.querySelector('link[rel="shortcut icon"');
  if (favicon) {
    // update the new link
    favicon.href = url;
  } else {
    // create new `link`
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = url;

    // append to the `head` element
    document.head.appendChild(link);
  }
};

// setFavicon('./icon-2.png');

// use an emoji as the favicon
const emojiFavicon = function (emoji) {
  // create a canvas element
  const canvas = document.createElement('canvas');
  canvas.height = 64;
  canvas.width = 64;

  // get the canvas context
  const context = canvas.getContext('2d');
  context.font = '64px serif';
  context.fillText(emoji, 0, 64);

  // get the custom URL
  const url = canvas.toDataURL();

  // update the favicon
  setFavicon(url);
};

emojiFavicon(`🎉🎉🎉`)
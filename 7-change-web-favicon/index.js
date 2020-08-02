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

setFavicon('./icon-2.png');
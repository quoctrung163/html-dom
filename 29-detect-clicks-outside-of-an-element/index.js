const element = document.getElementById('ele');

document.addEventListener('click', function (evt) {
  const isClickedOutside = !element.contains(evt.target);
})
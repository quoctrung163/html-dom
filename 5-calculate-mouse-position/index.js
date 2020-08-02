const element = document.getElementById('mousedown');

element.addEventListener('mousedown', e => {
  // get the target
  const target = e.target;

  // get the bounding rectangle of target
  const rect = target.getBoundingClientRect();

  // mouse position
  const x = e.clientX - rect.left;
  const y = e.clientY = rect.top;
  console.log(x, y);
});
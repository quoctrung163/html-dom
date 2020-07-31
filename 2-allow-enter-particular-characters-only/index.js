// hanle the events

const element = document.getElementById('input');

element.addEventListener('keypress', function (e) {
  // get the code of pressed key
  const key = e.which || e.keyCode;

  // 0, 1, ..., 9
  if (key != 32 && (key < 48 || key > 57)) {
    // prevent the default action
    e.preventDefault();
  }

  // track the current value
  let currentValue = element.value || '';

  element.addEventListener('input', function (e) {
    const target = e.target;

    // if user enter supported character (digits or space)
    /^[0-9\s]*$/.test(target.value) ? currentValue = target.value : target.value = currentValue;
  });

  // track the current cursor's postiotion
  const selection = {};
  selection = {
    selectionStart: target.selectionStart,
    selectionEnd: target.selectionEnd
  };

  element.addEventListener('input', (e) => {
    const target = e.target;
    if (/^[0-9\s]*$/.test(target.value)) {
      currentValue = target.value;
    } else {
      // Users enter the not supported characters
      // Restore the value and selection
      target.value = currentValue;
      target.setSelectionRange(
        selection.selectionStart,
        selection.selectionEnd
      );
    }
  })
})
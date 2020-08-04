const isDateInputSupported = function () {
  // create new input element
  const ele = document.createElement('input');

  // set the type attibute
  ele.setAttribute('type', 'date');

  const invalidValue = 'not-a-valid-date';

  // set an invalid value
  ele.setAttribute('value', invalidValue);

  return ele.value !== invalidValue;
}

const element = document.createElement('input');
element.setAttribute('type', 'date');
const invalidValue2 = 'not-a-valid-date';
element.setAttribute('value', invalidValue2);

console.log(isDateInputSupported()); // true
// handle the input event which is triggered if the value of element is changed
const messageEle = document.getElementById('message');
const counterEle = document.getElementById('counter');

messageEle.addEventListener('input', function (e) {
  const target = e.target;

  // get the `maxlength` attribute
  const maxLength = target.getAttribute('maxlength');

  const currentLength = target.value.length;

  counterEle.innerHTML = `${currentLength}/${maxLength}`;
})
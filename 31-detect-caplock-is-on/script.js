const texboxElement = document.getElementById('textbox');
const messageElement = document.getElementById('message');

texboxElement.addEventListener('keydown', function (e) {
  const capsLockOn = e.getModifierState('CapsLock');

  // update the conetnt of message
  messageElement.innerHTML = capsLockOn ? 'Caps lock is ON' : '';

  // show or hide the message based on the Capslock state
  messageElement.style.display = capsLockOn ? 'block' : 'none'
})
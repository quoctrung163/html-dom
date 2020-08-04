const element = document.getElementById('id');

const cloned = element.cloneNode(true);
console.log(cloned);

element.appendChild(cloned); // cloned appened chill into element
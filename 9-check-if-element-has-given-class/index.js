const element = document.getElementById('id');
const classCheck = 'id';

function checkElementHasClass(ele, classCheck) {
  if (ele.classList.contains(classCheck) === true) {
    console.log('true');
  } else {
    console.log('false');
  }
}

checkElementHasClass(element, classCheck);
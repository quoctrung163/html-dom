const element = document.getElementById('matches');

const matches = function (ele, selector) {
  return (
    ele.matches ||
    ele.matchesSelector ||
    ele.msMatchesSelector ||
    ele.mozMatchesSelector ||
    ele.oMatchesSelector
  ).call(ele, selector)
};

console.log(matches(element, '#matches')); // true
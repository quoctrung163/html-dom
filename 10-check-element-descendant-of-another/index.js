const parent = document.getElementById('parent');
const child = document.getElementById('child');

// 1. use the contains method
// const isDescendant = parent.contains(child);

// 2. go up from the child until see the parent
// check if `child` is a descendant of `parent`
const isDescendant = function (parent, child) {
  let node = child.parentNode;
  while (node) {
    if (node === parent) {
      return true;
    }

    // traverse up to the parent
    node = node.parentNode;
  }

  // go up until the root but couldn't find the `parent`
  return false;
}


console.log(isDescendant(parent, child)) // true
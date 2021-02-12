function multiply(a, b) {
  return a * b;
}

function addTarget(targetObj = {}) {
  targetObj.target = "target";
  return targetObj;
}

multiply(10, 20);
multiply("10", "200"); //?
multiply("", ""); // ?

addTarget() // ?
addTarget(null)

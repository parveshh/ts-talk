function addTarget(obj) {
  if (obj === void 0) { obj = { target: '' }; }
  obj.target = 'target';
  return obj;
}

var user = {
  'id': 1,
  firstName: 'Donald',
  lastName: 'T',
  isPresident: function () { /** Some process here.. */ return false; }
};

// lets check if user is president then allow to delete files
if (user.isPresident()) {
  // delete all files
  console.log('files deleted');
}
console.log(addTarget());
console.log(addTarget(null))
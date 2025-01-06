function changeContext(func, obj) {
  obj[func] = func;
  // Your code here
  return obj[func]();
}

const bat = {
  secret: "I'm afraid of the dark",
};

function blurtOutSecret() {
  console.log(this.secret);
}

changeContext(blurtOutSecret, bat);

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;

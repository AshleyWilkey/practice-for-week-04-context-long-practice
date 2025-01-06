function bindToAnArg(func, arg) {
  // Your code here
  return function (...args) {
    return func(arg, ...arg);
  };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;

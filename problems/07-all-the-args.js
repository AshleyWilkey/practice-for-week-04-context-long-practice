function allTheArgs(func, ...args) {
  // Your code here\
  return function (...addArgs) {
    return func(...args, ...addArgs);
  };
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;

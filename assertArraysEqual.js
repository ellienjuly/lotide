const assertArraysEqual = function(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result = `✅✅✅ Assertion Passed: True`;
      } else {
        result = `🛑🛑🛑 Assertion Failed: False`;
      }
    }
  } else {
    result = `🛑🛑🛑 Assertion Failed: False`;
  }
  return result;
};

module.exports = assertArraysEqual;
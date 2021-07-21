let result;

const eqArrays = function(arr1, arr2) {
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

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
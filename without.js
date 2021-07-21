const without = function(source, itemsToRemove) {
  let sourceCopy = [...source];

  for (let i = 0; i < sourceCopy.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceCopy[i] === itemsToRemove[j]) {
        let count = 0;
        count += 1;

        let index = sourceCopy.indexOf(sourceCopy[i]);
        sourceCopy.splice(index, count);
        return sourceCopy;
      }
    }
  }
};

let result;

const assertArraysEqual = function(arr1, arr2) {
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
  console.log(result);
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
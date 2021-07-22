const assertEqual = function(actual, expected) {
  let isTrue = actual === expected;
  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (!isTrue) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const middle = function(arr) {
  let center = arr.length / 2;
  let noCenter;
  let result = [];
  
  if (center > 1) {
    if (!Number.isInteger(center)) {
      result.push(arr[Math.ceil(center - 1)]);
      
      return result;

    } else if (Number.isInteger(center)) {
      result.push(arr[center - 1]);
      result.push(arr[center]);
      
      return result;
    }
  } else {
    return noCenter;
  }
};

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(middle([1, 2, 3, 4 ,5 ,6 ,7]));
console.log(middle([1]));


console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertEqual(middle([1, 2, 3, 4])[0], 2));
console.log(assertEqual(middle([1, 2, 3, 4])[1], 3));
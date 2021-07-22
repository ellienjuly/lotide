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
  console.log(result);
};


const assertEqual = function(actual, expected) {
  let isTrue = actual === expected;
  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (!isTrue) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPositions = function(sentence) {
  const results = {}; //An object which will receive the key value??
  
  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i]; // a letter
    results[key] = results[key] || [];
    results[key].push(i);
  }
  return results;
};


console.log(letterPositions('hello'));
assertEqual(letterPositions('hello')['h'][0], 0);
assertEqual(letterPositions('hello')['e'][0], 1);
assertEqual(letterPositions('hello')['l'][0], 2);
assertEqual(letterPositions('hello')['l'][1], 3);
assertEqual(letterPositions('hello')['o'][0], 4);

assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions('hello')['e'], [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]);

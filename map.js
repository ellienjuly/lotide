const words = ["ground", "control", "to", "major", "tom"];

const assertEqual = function(actual, expected) {
  let isTrue = actual === expected;
  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (!isTrue) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);
assertEqual(results1[0], words[0][0]);
assertEqual(results1[1], words[1][0]);
assertEqual(results1[2], words[2][0]);
assertEqual(results1[3], words[3][0]);
assertEqual(results1[4], words[4][0]);
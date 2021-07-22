const assertEqual = function(actual, expected) {
  let isTrue = actual === expected;
  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (!isTrue) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
  
    } else if (!callback(item)) {
      result.push(item);
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertEqual(results1[0], data1[0]);
assertEqual(results1[1], data1[1]);
assertEqual(results1[2], data1[2]);
assertEqual(results1[3], data1[3]);
assertEqual(results1[4], data1[4]);
assertEqual(results1[5], data1[5]);

assertEqual(results2[0], data2[0]);
assertEqual(results2[1], data2[1]);
assertEqual(results2[2], data2[2]);
assertEqual(results2[3], data2[3]);
assertEqual(results2[4], data2[4]);
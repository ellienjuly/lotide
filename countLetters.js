const assertEqual = function(actual, expected) {
  let isTrue = actual === expected;
  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (!isTrue) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const counter = {};
  for (let letter of string) {
    if (counter[letter]) {
      counter[letter] += 1;
    } else {
      counter[letter] = 1;
    }
  }
  return counter;
};

assertEqual(countLetters('LHLLL')['L'], 4);
assertEqual(countLetters('LHL')['H'], 1);
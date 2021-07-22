const assertEqual = function(actual, expected) {
  let isTrue = actual === expected;
  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (!isTrue) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] === obj2[key]) {
      return true;
    }
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
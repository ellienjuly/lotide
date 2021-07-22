// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const source = Object.keys(actual);
  const result = Object.keys(expected);
  if (source.length !== result.length) {
    return `🛑🛑🛑 Assertion Failed: False`;
  }
  for (let key of source) {
    if (actual[key] === expected[key]) {
      return `✅✅✅ Assertion Passed: True`;
    }
  }
  return `🛑🛑🛑 Assertion Failed: False`;
};


// TEST CODE
const ab = { a: "1", b: "2", c: "1", d: "2"  };

const expected = {b: "2", a: "1" };
console.log(assertObjectsEqual(ab, expected));


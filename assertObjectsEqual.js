const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const source = Object.keys(actual);
  const result = Object.keys(expected);
  if (source.length !== result.length) {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  for (let key of source) {
    if (actual[key] === expected[key]) {
      return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
    }
  }
  return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};


// TEST CODE
const ab = { a: "1", b: "2", c: "1" };

const expected = {b: "2", a: "1" };
console.log(assertObjectsEqual(ab, expected));


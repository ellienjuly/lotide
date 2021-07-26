const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true if two arrys cotain the same elements", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  })
})


// // TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
// assertEqual(eqArrays([1, 5, 3], [3, 2, 1]), true);
// assertEqual(eqArrays([1], [1]), true);

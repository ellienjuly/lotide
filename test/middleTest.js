const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });

  it("return undefined for [1]", () => {
    assert.deepEqual(middle([1]), undefined);
  });

  it("return 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
})
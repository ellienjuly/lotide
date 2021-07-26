const assert = require('chai').assert;

const tail = require('../tail');

describe("#Tail", () => {
  it("returns true if an two arrays are the same", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"])
  })
})
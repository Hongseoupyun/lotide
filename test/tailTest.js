const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns true", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  
});






//assertEqual(tail([1,2,3]),[2,3])

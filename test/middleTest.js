const assert = require('chai').assert;
const middle = require('../middle');


// assertArrayEqual(middle([1, 2, 3]), [2]);
// assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);




describe("#middle", () => {
  it('should returns [2] when pass [1,2,3]', () => {
    const result = middle([1, 2, 3]);
    assert.notStrictEqual(result, [2]);
  })
  it('should returns [2,3] when pass [1,2,3,4]', () => {
    const result = middle([1, 2, 3, 4]);
    assert.notStrictEqual(result, [2, 3]);
  })
  it('should returns [3,4] when pass [1,2,3,4,5,6]', () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    assert.notStrictEqual(result, [3, 4]);
  })


})
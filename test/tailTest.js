const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it('should returns ["Lighthouse", "Labs"] when pass ["Hello", "Lighthouse", "Labs"]', () => {

    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.notStrictEqual(result, ["Lighthouse", "Labs"]);

  })
})

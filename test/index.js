// import { assert } from "chai";
// import { getTreeArr } from "../lib";

// describe("#index.js", function() {
//   it("getTreeArr should return result", () => {
//     const list = [{ id: 1, pid: 0, name: 11 }, { id: 2, pid: 1, name: 2 }];
//     const result = [
//       { id: 1, pid: 0, name: 11, children: [{ id: 2, pid: 1, name: 2 }] }
//     ];
//     assert.strictEqual(getTreeArr(list), result);
//   });
// });

var expect = require('chai').expect;

describe('Array', function () {
  describe('#indexOf()', function() {
    it('未找到值时应当返回-1', function () {
      // assert.equal(-1, [1, 2, 3].indexOf(4))
      expect([1, 2, 3].indexOf(4)).to.be.equal(-1);
    })
  })
})

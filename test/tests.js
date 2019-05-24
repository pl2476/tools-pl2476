// import { assert } from "chai";
// import { getTreeArr } from "../lib";

var assert = chai.assert;

describe("#tests.js", function() {
  it("getTreeArr", () => {
    const list = [{ id: 1, pid: 0, name: 11 }, { id: 2, pid: 1, name: 2 }];
    const result = [
      { id: 1, pid: 0, name: 11, children: [{ id: 2, pid: 1, name: 2 ,children: []}] }
    ];
    console.log(getTreeArr({ key: 'id', pKey: 'pid', data: list }));
    const flag = _.isEqual(getTreeArr({ key: 'id', pKey: 'pid', data: list }), result)
    assert.strictEqual(flag, true);
  });
});

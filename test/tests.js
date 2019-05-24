const assert = chai.assert;
const utils = require('../lib/index.js')

describe("#tests.js", function() {
  it("getTreeArr", () => {
    const list = [{ id: 1, pid: 0, name: 11 }, { id: 2, pid: 1, name: 2 }];
    const result = [
      { id: 1, pid: 0, name: 11, children: [{ id: 2, pid: 1, name: 2 ,children: []}] }
    ];
    console.log(utils.getTreeArr({ key: 'id', pKey: 'pid', data: list }));
    const flag = _.isEqual(utils.getTreeArr({ key: 'id', pKey: 'pid', data: list }), result)
    assert.strictEqual(flag, true);
  });
});

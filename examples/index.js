const utils = require('../lib');
const list = [
  {id: 1, pid: 0, name: 11}, {id: 2, pid: 1, name: 2}
]
console.log(utils)
console.log(utils.getTreeArr({ key: 'id', pKey: 'pid', data: list }))
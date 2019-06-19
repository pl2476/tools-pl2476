(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * 将一级的数据结构处理成树状数据结构
 * @param {Object} obj {key, pKey, data}
 *  @param obj.key  字段名称 比如id
 *  @param obj.pKey 父字段名称 比如 pid
 *  @param obj.rootPValue 根节点的父字段的值
 *  @param obj.data 需要处理的数据
 *  @param obj.jsonData 是否深复制数据（默认是true）
 * @return {Array} arr
 */
var getTreeArr = function getTreeArr(param) {
  var obj = param;

  if (!Array.isArray(obj.data)) {
    return [];
  }

  obj.jsonData = obj.jsonData === false ? obj.jsonData : true;
  var arr = obj.jsonData ? JSON.parse(JSON.stringify(obj.data)) : obj.data;
  var arr1 = []; // 将数据处理成数状结构

  arr.forEach(function (arrItem) {
    var item = arrItem;
    var index = 0;
    item.children = [];
    arr.forEach(function (item1) {
      // 得到树结构关系
      if (item[obj.key] === item1[obj.pKey]) {
        item.children.push(item1);
      } // 判断根节点


      if (item1[obj.key] !== item[obj.pKey]) {
        index += 1;
      }
    }); // 没传入根节点，根据当前数据结构得到根节点

    if (!('rootPValue' in obj) && index === arr.length) {
      arr1.push(item);
    }
  }); // 传入根节点，根据传入的根节点组成树结构

  if ('rootPValue' in obj) {
    arr.forEach(function (arrItem) {
      var item = arrItem;

      if (item[obj.pKey] === obj.rootPValue) {
        arr1.push(item);
      }
    });
  }

  return arr1;
};
/**
 * 数字转换成千分位表示
 * @param {Number} num
 * @return {String} str
 */


var numToThousands = function numToThousands(num) {
  var str = num.toString().indexOf('.') !== -1 ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  return str;
};

var utils = {
  getTreeArr: getTreeArr,
  numToThousands: numToThousands
};
var _default = utils;
exports["default"] = _default;
module.exports = exports.default;
},{}],2:[function(require,module,exports){
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
  it("numToThousands", () => {
    const num = 9012.0520;
    const result = '9,012.052';
    const flag = _.isEqual(utils.numToThousands(num), result)
    assert.strictEqual(flag, true);
  });
});

},{"../lib/index.js":1}]},{},[2]);

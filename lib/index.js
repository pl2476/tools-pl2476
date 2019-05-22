"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;/**
 * 将一级的数据结构处理成树状数据结构
 * @param {Object} obj {key, pKey, data}
 *  @param obj.key  字段名称 比如id
 *  @param obj.pKey 父字段名称 比如 pid
 *  @param obj.rootPValue 根节点的父字段的值
 *  @param obj.data 需要处理的数据
 *  @param obj.jsonData 是否深复制数据（默认是true）
 * @return {Array} arr
 */var getTreeArr=function(a){var b=a;if(!Array.isArray(b.data))return[];b.jsonData=!1!==b.jsonData||b.jsonData;var c=b.jsonData?JSON.parse(JSON.stringify(b.data)):b.data,d=[];return c.forEach(function(a){var e=a,f=0;e.children=[],c.forEach(function(a){e[b.key]===a[b.pKey]&&e.children.push(a),a[b.key]!==e[b.pKey]&&(f+=1)}),"rootPValue"in b||f!==c.length||d.push(e)}),"rootPValue"in b&&c.forEach(function(a){var c=a;c[b.pKey]===b.rootPValue&&d.push(c)}),d},utils={getTreeArr:getTreeArr},_default=utils;exports["default"]=_default,module.exports=exports.default;
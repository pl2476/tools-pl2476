"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.testFunction=exports["default"]=void 0;var utils={getTreeArr:getTreeArr/**
 * 将一级的数据结构处理成树状数据结构
 * @param {Object} obj {key, pKey, data}
 *  @param obj.key  字段名称 比如id
 *  @param obj.pKey 父字段名称 比如 pid
 *  @param obj.rootPValue 根节点的父字段的值
 *  @param obj.data 需要处理的数据
 *  @param obj.jsonData 是否深复制数据（默认是true）
 * @return {Array} arr
   */};getTreeArr=function getTreeArr(a){if(!Array.isArray(a.data))return console.log("getTreeArr=>\u8BF7\u4F20\u5165\u6570\u7EC4"),[];a.jsonData=!1!==a.jsonData||a.jsonData;var b=a.jsonData?JSON.parse(JSON.stringify(a.data)):a.data,c=[];return b.forEach(function(d){var e=0;d.children=[],b.forEach(function(b){d[a.key]===b[a.pKey]&&d.children.push(b),b[a.key]!==d[a.pKey]&&e++}),"rootPValue"in a||e!==b.length||c.push(d)}),"rootPValue"in a&&b.forEach(function(b){b[a.pKey]===a.rootPValue&&c.push(b)}),c};var testFunction=function(){return"I am just an Test Function"};exports.testFunction=testFunction;var _default=utils;exports["default"]=_default;
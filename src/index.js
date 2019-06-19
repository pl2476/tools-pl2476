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
const getTreeArr = (param) => {
  const obj = param;
  if (!Array.isArray(obj.data)) {
    return [];
  }
  obj.jsonData = obj.jsonData === false ? obj.jsonData : true;
  const arr = obj.jsonData ? JSON.parse(JSON.stringify(obj.data)) : obj.data;
  const arr1 = [];
  // 将数据处理成数状结构
  arr.forEach((arrItem) => {
    const item = arrItem;
    let index = 0;
    item.children = [];
    arr.forEach((item1) => {
      // 得到树结构关系
      if (item[obj.key] === item1[obj.pKey]) {
        item.children.push(item1);
      }
      // 判断根节点
      if (item1[obj.key] !== item[obj.pKey]) {
        index += 1;
      }
    });
    // 没传入根节点，根据当前数据结构得到根节点
    if (!('rootPValue' in obj) && index === arr.length) {
      arr1.push(item);
    }
  });
  // 传入根节点，根据传入的根节点组成树结构
  if ('rootPValue' in obj) {
    arr.forEach((arrItem) => {
      const item = arrItem;
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
const numToThousands = (num) => {
  const str = (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  return str;
};

const utils = {
  getTreeArr,
  numToThousands,
};

export default utils;

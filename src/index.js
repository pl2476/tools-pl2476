const utils = {
  getTreeArr,
}

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
  getTreeArr = (obj) => {
    if (!Array.isArray(obj.data)) {
      console.log('getTreeArr=>请传入数组')
      return []
    }
    obj.jsonData = obj.jsonData === false ? obj.jsonData : true
    const arr = obj.jsonData ? JSON.parse(JSON.stringify(obj.data)) : obj.data
    const arr1 = []
    // 将数据处理成数状结构
    arr.forEach(item => {
      let index = 0
      item.children = []
      arr.forEach(item1 => {
        // 得到树结构关系
        if (item[obj.key] === item1[obj.pKey]) {
          item.children.push(item1)
        }
        // 判断根节点
        if (item1[obj.key] !== item[obj.pKey]) {
          index++
        }
      })
      // 没传入根节点，根据当前数据结构得到根节点
      if (!('rootPValue' in obj) && index === arr.length) {
        arr1.push(item)
      }
    })
    // 传入根节点，根据传入的根节点组成树结构
    if ('rootPValue' in obj) {
      arr.forEach(item => {
        if (item[obj.pKey] === obj.rootPValue) {
          arr1.push(item)
        }
      })
    }
    return arr1
  }

const testFunction = () => 'I am just an Test Function';

export default utils;

export { testFunction };
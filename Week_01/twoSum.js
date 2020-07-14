/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 解题思路：
 * 1.主要运用了hash表的特性，将与target的差值作为key，下标作为value进行存储
 * 然后依次查找数组中的元素，如果数组中的元素做为key，能够在hash表中查找到，则存在满足两数之和的元素
 * 则直接取出对应key的值，也就是数组下标i
 */

var twoSum = function(nums, target) {
    var obj = {}
   for(let i=0; i<nums.length; i++) {
        if(obj[nums[i]] !== undefined) {
            return [obj[nums[i]], i]
        }
        obj[target - nums[i]] = i
   }
};
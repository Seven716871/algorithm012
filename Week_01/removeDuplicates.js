/**
 * 
 * 解题思路：1.暴力双重循环 时间复杂度On2
 *          2.快慢指针 时间复杂度On
 */

var removeDuplicates = function (nums) {
    var i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
};
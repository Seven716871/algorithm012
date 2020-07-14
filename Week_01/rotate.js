
/**
 * 解题思路：
 * 1.依次旋转，每次旋转一个位置，因此需要移动数组，时间复杂度为On2
 * 2.三次反转方法，先整体反转、再反转前k个数字，再反转后n-k个数字 时间复杂度On
 * 3.使用环状替换 时间复杂度On
 */

var rotate = function(nums, k) {
    var length = nums.length
    k = k % length
    var count = 0
    for (let start = 0;count<nums.length; start++) {
        var cur = start
        var pre = nums[cur]
        do {
            var next = (cur + k) % length
            var temp = nums[next]
            nums[next] = pre
            pre = temp
            cur = next
            count++
        } while (start != cur);
    }
};
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 解题思路：跟合并两个有序链表思路一样，双指针依次遍历比对大小，再进行数组操作
 */
var merge = function(nums1, m, nums2, n) {

    var nums_copy = [...nums1]

    if(!nums2.length) {
        return
    }

    var p = 0
    var p1 = 0
    var p2 = 0
    while(p1 < m && p2 < n) {
        if(nums_copy[p1] < nums2[p2]) {
            nums1[p] = nums_copy[p1++]
        } else {
            nums1[p] = nums2[p2++]
        }
        p++
    }

    if (p1 < m) {
        const length = m - p1
        for(let i=0;i<length;i++) {
            nums1[p+i] = nums_copy[p1++]
        }
    }
    
    if (p2 < n) {
        const length = n - p2
        for(let i=0;i<length;i++) {
            nums1[p+i] = nums2[p2++]
        }
    }
};
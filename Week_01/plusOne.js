/**
 * @param {number[]} digits
 * @return {number[]}
 * 解题思路：主要是数学计算中进位的处理，当前位+1 % 10 !=0  则说明没有进位，则操作结束
 * 如果999这种特殊情况，需要升一位，则需要特殊处理，其他情况则遍历进行相同判断即可
 */
var plusOne = function(digits) {
    var length = digits.length
    for (let i=length -1; i>=0; i--) {
        digits[i]++
        digits[i] %= 10
        if (digits[i] != 0) {
            return digits
        }   
    }

    digits = new Array(digits.length + 1)
    digits[0] = 1
    for (let i=1; i<digits.length; i++) {
        digits[i] = 0
    }
    return digits
};
/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 * 设计思路：数据结构采用数组的形式，主要难点在于循环数组中判断数组的空跟满
 * 常用的判断数组空跟满的方法为如下：
 * 1.头指针 head == tail时 为 满
 * 2.头指针 (head + 1 % ) == tail时 为空
 */

// @lc code=start
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.items = new Array(k)
    this.queueLen = k + 1
    this.itemCount = 0
    this.head = 0
    this.tail = 0
    this.head = this.queueLen - 1 //初始化头指针
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.head === this.tail) {
        return false;
    }
    this.itemCount++
    this.items[this.head] = value
    this.head = this.head === 0 ? this.queueLen - 1 : this.head - 1
    return true
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.head === this.tail) {
        return false;
    }
    this.itemCount++
    this.items[this.tail] = value
    this.tail = (this.tail + 1) % this.queueLen
    return true
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if ((this.head + 1 ) % this.queueLen === this.tail || this.itemCount === 0) {
        return false
    }
    this.itemCount--
    this.head = (this.head + 1) % this.queueLen
    this.items[this.head] = null
    return true
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if ((this.head + 1 ) % this.queueLen === this.tail) {
        return false
    }
    this.itemCount--
    this.tail = this.tail === 0 ? this.queueLen - 1 : this.tail - 1
    this.items[this.tail] = null
    return true
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if ((this.head + 1) % this.queueLen === this.tail) {
        return -1
    }
    var head = (this.head + 1) % this.queueLen
    return this.items[head]
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if ((this.head + 1) % this.queueLen === this.tail) {
        return -1
    }
    var tail = this.tail === 0 ? this.queueLen - 1 : this.tail - 1
    return this.items[tail]
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return (this.head + 1) % this.queueLen === this.tail
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.head === this.tail
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end


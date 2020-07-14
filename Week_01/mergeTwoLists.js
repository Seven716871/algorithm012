/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * 思路：主要是2个指针分别指向2个有序的链表，一次遍历2个链表，比对大小，总是将小的节点插入到新的链表当中
 */
var mergeTwoLists = function (l1, l2) {
    var prehead = new ListNode(-1);
    var prev = prehead
    while(l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            prehead.next = l1
            l1 = l1.next
        } else {
            prehead.next = l2
            l2 = l2.next
        }
        prehead = prehead.next
    }

    prehead.next = l1 == null ? l2 : l1
    return  prev.next
};
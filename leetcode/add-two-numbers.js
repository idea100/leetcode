/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = l1.val + l2.val;
    let n = parseInt(sum / 10);
    let result = list = new ListNode(sum % 10)

    while (l1.next || l2.next || n > 0) {
        l1 = l1.next || (new ListNode(0));
        l2 = l2.next || (new ListNode(0));
        sum = l1.val + l2.val + n;
        list.next = new ListNode(sum % 10)
        list = list.next
        n = parseInt(sum / 10)
    }

    return result
};

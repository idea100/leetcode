// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
//
// 示例：
//
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4


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
var mergeTwoLists = function(l1, l2) {
    let tmpHead = tmp = new ListNode();

    while(true) {
        if(!l1 || !l2) {
          tmp.next = l1 || l2;
          break;
        }

        if (l1.val <= l2.val) {
            tmp.next = l1;
            l1 = l1.next;
            tmp = tmp.next;
        } else {
          tmp.next = l2;
          l2 = l2.next;
          tmp = tmp.next;
        }
    }

    return tmpHead.next;
};

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8


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
     l1 || (l1 = new ListNode(0))
     l2 || (l2 = new ListNode(0))
     var sum = l1.val + l2.val, x = sum % 10, y = parseInt(sum / 10);
     var result = new ListNode(x), tmpResult = result;

     while(l1.next || l2.next || y > 0)  {
         l1 = l1.next || new ListNode(0)
         l2 = l2.next || new ListNode(0)
         sum = l1.val + l2.val + y
         x = sum % 10
         y = parseInt(sum / 10)
         tmpResult.next = new ListNode(x)
         tmpResult = tmpResult.next
     }

     return result
 };

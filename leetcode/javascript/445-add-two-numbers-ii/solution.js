// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
//
// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
//
//
//
// 进阶：
//
// 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
//
//
//
// 示例：
//
// 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 8 -> 0 -> 7
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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
  var reverseList = function(head) {
    const arr = [];

    while(head) {
      arr.push(head.val);
      head = head.next;
    }

    return arr;
  };

  let reverseL1 = reverseList(l1);
  let reverseL2 = reverseList(l2);
  let arr = [];

  let c = 0;
  while(reverseL1.length > 0 || reverseL2.length > 0) {
    const a = reverseL1.pop() || 0;
    const b = reverseL2.pop() || 0;
    const result = a + b + c;
    c = result >= 10 ? 1 : 0;
    arr.push(result % 10);
  }

  if (c) {
    arr.push(c);
  }

  let result = new ListNode(arr.pop());
  const returnResult = result;

  while(arr.length > 0) {
    result.next = new ListNode(arr.pop());
    result = result.next;
  }

  return returnResult;
};

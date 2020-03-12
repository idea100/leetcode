/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  const arr = [];

  while(head) {
    arr.push(head);
    head = head.next;
  }

  const result = arr.pop();
  head = result;

  while(arr.length > 0) {
    head.next = arr.pop();
    head = head.next;
  }
  head.next = null;

  return result;
};

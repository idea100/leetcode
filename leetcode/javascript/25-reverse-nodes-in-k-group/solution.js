/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const result = new ListNode();

    let p = result;
    let i = 0;

    while(head) {
        if (i === 0) {
            while(p.next) {
                p = p.next;
            }
        }

        const tmp = head;
        head = head.next;

        tmp.next = p.next;
        p.next = tmp;

        i = (i + 1) % k;
    }

    if (i !== 0) {
        head = p.next;
        p.next = null;

        while(head) {
            const tmp = head;
            head = head.next;

            tmp.next = p.next;
            p.next = tmp;
        }
    }

    return result.next;
};
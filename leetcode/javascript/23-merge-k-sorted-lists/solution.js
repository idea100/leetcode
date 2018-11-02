/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let node = new ListNode();
    let result = node;

    lists = lists.filter(item => item);
    lists.sort((item1, item2) => item1.val - item2.val);

    while(lists.length > 0) {
        node.next = lists[0];
        lists[0] = lists[0].next;
        node = node.next;

        lists = lists.filter(item => item);
        lists.sort((item1, item2) => item1.val - item2.val);

    }

    return result.next;
};

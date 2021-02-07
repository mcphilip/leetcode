/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null;
    if (!head.next) return head;

    let newHead;

    const r = function(node) {
        if (!node.next) {
            newHead = node;
            return node;
        }

        let nextNode = r(node.next);

        node.next = null;
        nextNode.next = node;
    
        return node;
    };

    r(head);

    return newHead;
};

module.exports = {reverseList};

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
    // handle edge cases:
    if (!head) return null;
    if (!head.next) return head;

    let originalTail = null;

    const recursiveStep = function(node) {
        if (node.next) {
            const nextNode = recursiveStep(node.next);
            nextNode.next = node;
        }
        else {
            originalTail = node;
        }
        return node;
    };

    recursiveStep(head);

    head.next = null;
    return originalTail;
};

module.exports = {reverseList};

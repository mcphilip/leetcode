/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // handle edge cases
    if (!head) return null;
    if (val === null || val === undefined) return head;
    if (!head.next && head.val === val) return null;

    // remove all elements from the beginning of the list matching val
    head = getNextNonMatch(head, val);

    // handle edge case where all nodes were removed.
    if (!head) return null;

    // at this point head is a node that must remain
    const trueHead = head;
    let nodePrevious = head;

    while (head) {
        nodePrevious = head;
        head = getNextNonMatch(head.next, val);
        nodePrevious.next = head;
    }

    return trueHead;
};

const getNextNonMatch = function(node, val) {
    while (node != null && node.val === val) {
        node = node.next;
    }

    return node;
};

module.exports = {removeElements};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // handle edge cases
    if (!head || !n || n < 1) return null;
    if (n == 1 && !head.next) return null;

    let rightNode = head;
    let leftNode = head;

    // position rightNode n steps from left node
    for (let i = 1; i < n; i++) rightNode = rightNode.next;
    
    // handle edge case where head is being removed:
    if (!rightNode.next) return leftNode.next;

    while (rightNode.next !== null) {
        rightNode = rightNode.next;

        // check if rightNode just reached end of list
        if (!rightNode.next) {
            leftNode.next = leftNode.next.next;
            break;
        }
        leftNode = leftNode.next;
    }

    return head;
};

module.exports = {removeNthFromEnd};

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
var swapPairs = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    if (!head.next.next) {
        let newHead = head.next;
        head.next = null;
        newHead.next = head;
        return newHead;
    }

    const r = function(nodeA, nodeB) {
        let nextNode = null;
        if (!nodeB) return nodeA;
        if (nodeB.next) {
            nextNode = r(nodeB.next, nodeB.next.next);
        }

        nodeA.next = nextNode;
        nodeB.next = nodeA;

        return nodeB;
    }

    let newHead = r(head, head.next);

    return newHead;
};

module.exports = {swapPairs};

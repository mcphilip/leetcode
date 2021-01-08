/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    // handle edge cases: bad input, empty list, single node list, head is insertion point
    if (insertVal === null || insertVal === undefined) return null;
    if (head === null) {
        head = {val: insertVal, next: null};
        head.next = head;
        return head;
    }
    if (head.next === head) {
        const node = {val: insertVal, next: head};
        head.next = node;
        return head;
    }
    if (head.val === insertVal) {
        const node = {val: insertVal, next: head.next};
        head.next = node;

        return head;
    }

    let originalHead = head;
    let nextNode = head.next;
    let prevNode = head;
    const newNode = {val: insertVal, next: null};
    let firstPass = true;

    while (prevNode !== head || firstPass) {
        if (nextNode.val === insertVal || 
            (nextNode.val > insertVal && prevNode.val <= insertVal) ||
            (prevNode.val > insertVal && nextNode.val > insertVal && nextNode.val < prevNode.val) ||
            (prevNode.val < insertVal && nextNode.val < insertVal && nextNode.val < prevNode.val) ||
            (nextNode === head)) {
            newNode.next = nextNode;
            prevNode.next = newNode;
            break;
        }


        prevNode = nextNode;
        nextNode = nextNode.next;
        firstPass = false;
    }

    return originalHead;
};

module.exports = {insert};

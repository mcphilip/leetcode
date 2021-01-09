/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === null || k === undefined) return null;
    if (!head.next) return head;
    
    let originalHead = head;
    let length = 1; 

    while (head.next) {
        head = head.next;
        length++;
    }

    // edge case where legnth is a multiple of k
    let shiftLength = 0 == k % length ? 0 : k >  length ? length - (k % length) : length - k;
    if (shiftLength === 0) return originalHead;

    console.log(`length: ${length}, shiftLength: ${shiftLength}`);

    //head is at original tail and we have the length calculated
    let i = 1;
    let newTail = originalHead;

    while (i < shiftLength) {
        newTail = newTail.next;
        i++;
    }

    let newHead = newTail.next;
    head.next = originalHead;
    newTail.next = null;

    console.log(`newTail: ${newTail.val}, newHead: ${newHead.val}`);

    return newHead;
};

module.exports = {rotateRight};

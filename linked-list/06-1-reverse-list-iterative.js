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
    //handle edge cases
    if (!head) return null;
    if (!head.next) return head;

    let originalHead = head;
    
    while (head.next.next) head = head.next;

    let rightPtr = head;
    let originalTail = rightPtr.next;

    while (rightPtr !== originalHead) {
        rightPtr.next.next = rightPtr;
        rightPtr.next = null;
        rightPtr = originalHead;
        while (rightPtr.next.next) rightPtr = rightPtr.next;
    }

    rightPtr.next.next = rightPtr;
    rightPtr.next = null;
    
    return originalTail;
};

module.exports = {reverseList};

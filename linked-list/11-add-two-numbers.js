/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1 || !l2) return null;
    if (l1.val === 0 && !l1.next) return l2;
    if (l2.val === 0 && !l2.next) return l1;

    let head = null;
    let tail = null;
    let moreNodes = true;
    let carry = 0;

    while (moreNodes) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        let newVal = l1Val + l2Val + carry;
        if (newVal >= 10) {
            carry = Math.floor(newVal/10);
            newVal = newVal % 10;
        }
        else {
            carry = 0;
        }

        let node = {val: newVal, next: null};
        if (!head) {
            head = node;
            tail = node;
        }
        else {
            tail.next = node;
            tail = node;
        }

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        if (!l1 && !l2 ) {
            moreNodes = false;
            if (carry !== 0) {
                tail.next = {val: carry, next: null};
            }
        }

    }

    return head;
};

module.exports = {addTwoNumbers};

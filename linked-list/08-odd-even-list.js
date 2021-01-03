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
var oddEvenList = function(head) {
    // handle edge cases:
    if (!head) return null;
    if (!head.next || !head.next.next) return head;

    let oddHead = head;
    let evenHead = head.next;
    let odd = head;
    let even = head.next;
    let i = 1;

    while ( odd.next || even.next) {
        if (i % 2 === 0) {
            if (even && even.next) {
                even.next = even.next.next;
                if (even.next) even = even.next;
            }
        }
        else {
            if (odd && odd.next) {
                odd.next = odd.next.next;
                if (odd.next) odd = odd.next;
            }
        }

        i++;
    }

    odd.next = evenHead;

    return oddHead;
};

module.exports = {oddEvenList};

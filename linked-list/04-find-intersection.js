/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // handle edge cases:
    if (!headA || !headB) return null;
    if (headA === headB) return headB;
    if (headA.next && headB.next && headA.next === headB.next) return headA.next;

    const {aLength, bLength, intersectingNode, disjointLists} = findIntersection(headA, headB);

    console.log(`aLength: ${aLength}, bLength: ${bLength}, intersectingNode: ${intersectingNode}, disjointLists: ${disjointLists}`);

    if (intersectingNode) return intersectingNode;
    if (disjointLists) return null;

    // make both lists start where they'll have the same length:
    if (aLength > bLength) headA = getNthNode(headA, (aLength - bLength) + 1);
    if (bLength > aLength) headB = getNthNode(headB, (bLength - aLength) + 1);

    console.log(`repositioned head nodes to: headA.val: ${headA.val}, headB.val: ${headB.val}`);

    let { intersectingNode: result} = findIntersection(headA, headB);

    console.log(`result: ${result}`);

    return result;
};

const getNthNode = function(head, index) {
    if (!head || !index) return null;

    for (let i = 1; i < index; i++) head = head.next;

    return head;
}

const findIntersection = function(nodeA, nodeB) {
    let aLength = 1;
    let bLength = 1;
    let aAtEnd =  false;
    let bAtEnd = false;
    let intersectingNode = null;
    let disjointLists = false;

    while (!aAtEnd || !bAtEnd) {
        console.log(`nodeA.val: ${nodeA.val}, nodeB.val: ${nodeB.val}`);

        //check if at end of non intersecting lists:
        if (!nodeA.next && !nodeB.next && nodeA !== nodeB) {
            disjointLists = true;
            break;
        }

        //check if intersection occured:
        if (nodeA === nodeB && aLength == bLength) {
            intersectingNode = nodeA;
            break;
        }

        // check for nodes at end of list:
        if (!nodeA.next) {
            aAtEnd = true;
        }
        else {
            nodeA = nodeA.next;
            aLength++;
        }

        if (!nodeB.next) {
            bAtEnd = true;
        }
        else {
            nodeB = nodeB.next;
            bLength++;
        }

    }

    return {aLength, bLength, intersectingNode, disjointLists};
};

module.exports = {findIntersection, getIntersectionNode, getNthNode};

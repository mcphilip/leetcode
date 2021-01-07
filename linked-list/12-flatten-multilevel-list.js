/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return null;
    if (!head.next && !head.child) return head;

    const originalHead = head;

    while (head) {
        let childLevelTail = null;

        if (head.child) {
            console.log(`[flatten] adding child at parent: ${head.val}, next parent: ${head.next ? head.next.val : null}, child: ${head.child.val}`);
            childLevelTail = getChildLevelTail(head);
            console.log(`[flatten] childLevelTail: ${childLevelTail.val}`);
            childLevelTail.next = head.next;
            if (head.next) head.next.prev = childLevelTail;
            head.next = head.child;
            head.child.prev = head;
            head.child = null;
        }

        head = childLevelTail ? childLevelTail : head.next;
    }

    return originalHead;
};

var getChildLevelTail = function(parentNode) {
    let childLevelPtr = parentNode.child;
    let childLevelTail = null;

    while (childLevelPtr) {
        console.log(`[getChildLevelTail]: childLevelPtr: ${childLevelPtr.val}, childLevelPtr.next: ${childLevelPtr.next ? childLevelPtr.next.val : null}`);
        let grandChildTailPtr = null;
        if (childLevelPtr.child) {
            console.log(`[getChildLevelTail] adding grandchild to child: ${childLevelPtr.val}, next child: ${childLevelPtr.next ? childLevelPtr.next.val : null}, grandchild: ${childLevelPtr.child.val}`);
            grandChildTailPtr = getChildLevelTail(childLevelPtr);
            console.log(`[getChildLevelTail] grandChildTail: ${grandChildTailPtr.val}`);
            grandChildTailPtr.next = childLevelPtr.next;
            if (childLevelPtr.next) childLevelPtr.next.prev = grandChildTailPtr;
            childLevelPtr.next = childLevelPtr.child;
            childLevelPtr.child.prev = childLevelPtr;
            childLevelPtr.child = null;
        }

        // console.log(`[getChildLevelTail] grandChildTailPtr: ${grandChildTailPtr ? grandChildTailPtr.value : null}, childLevelPtr.next: ${childLevelPtr.next ? childLevelPtr.next.val : null}`);
        if (!grandChildTailPtr && !childLevelPtr.next) {
            childLevelTail = childLevelPtr;
            break;
        }
        else if (grandChildTailPtr) {
            childLevelTail = grandChildTailPtr.next ? grandChildTailPtr.next : grandChildTailPtr;
        }

        childLevelPtr = grandChildTailPtr ? grandChildTailPtr.next : childLevelPtr.next;
    }

    return childLevelTail;
}

module.exports = {flatten};

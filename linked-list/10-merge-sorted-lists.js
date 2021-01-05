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
var mergeTwoLists = function(l1, l2) {
    // handle edge cases
    if (!l1 && !l2) return null;
    if (l1 && !l2) return l1;
    if (!l1 && l2) return l2;

    // merge everything to l1
    let l1Head = l1;
    let tmpl2Next = null;
    let l1Prev = null;
    let l2Prev = null;
    
    while (l2) {
        console.log(`l1Head: ${l1Head ? l1Head.val : null}, l1Prev: ${l1Prev ? l1Prev.val : null}, l1: ${l1 ? l1.val : null}, l2Prev: ${l2Prev ? l2Prev.val : null}, l2: ${l2 ? l2.val : null}`);

        if (!l1) {
            // remaining l2 nodes all greater than l1 nodes
            l1Prev.next = l2;
            break;
        }
        else {
            // at least 1 node left in both l1 and l2
            
            if (l2.val < l1.val) {
                // found a node to move over to l1

                if (!l1Prev) {
                    // adding to head of l1

                    tmpl2Next = l2.next;
                    l2.next = l1;
                    l1Head = l2;
                    l1Prev = l2;
                    l2Prev = l2;
                    l2 = tmpl2Next;
                }
                else {
                    tmpl2Next = l2.next;
                    l2.next = l1;
                    l1Prev.next = l2;
                    l1Prev = l2;
                    l2Prev = l2;
                    l2 = tmpl2Next;
                }
            }
            else {
                // l1 pointer not yet at place l2 node should be inserted
                l1Prev = l1;
                l1 = l1.next;
            }
        }
    }

    console.log(`l1Head: ${l1Head ? l1Head.val : null}, l1Prev: ${l1Prev ? l1Prev.val : null}, l1: ${l1 ? l1.val : null}, l2Prev: ${l2Prev ? l2Prev.val : null}, l2: ${l2 ? l2.val : null}`);
    
    let nodes = [];
    let printNode = l1Head;
    while (printNode) {
        nodes.push(printNode)
        printNode = printNode.next;
    };
    console.log(nodes);

    return l1Head;
};

module.exports = {mergeTwoLists};

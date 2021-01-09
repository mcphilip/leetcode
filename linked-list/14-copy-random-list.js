/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    const originalNodeMap = new Map();
    
    const deepCopy = function(node) {
        const newNode = {val: node.val, next: null, random: null};
        originalNodeMap.set(node, newNode);
        if (node.next) {
            newNode.next = deepCopy(node.next);
        }
        if (node.random) {
            newNode.random = originalNodeMap.get(node.random);
        }
        return newNode;
    };

    return deepCopy(head);
};



module.exports = {copyRandomList};

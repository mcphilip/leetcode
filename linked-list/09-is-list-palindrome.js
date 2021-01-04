/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // handle edge cases: bad input, single and two node lists
    if (!head) return false;
    if (!head.next) return true;
    if (!head.next.next) {
        if (head.val !== head.next.val) return false;
        else return true;
    }

    // list has at least three nodes
    let result = false;
    let doneChecking = false;
    let isEvenLengthList = false;

    // use recursion to get to the end of the list
    const recursiveStep = function(node, depth) {
        let leftNode = null;        

        if (node.next) {
            leftNode = recursiveStep(node.next, depth + 1);
        }
        else {
            // code only executed by tail node:
            leftNode = head;
            isEvenLengthList = depth % 2 === 0 ? true : false;
        }

        // following code executed in reverse list order for all nodes
        if (!doneChecking) {
            if (node.val === leftNode.val) {
                if ((isEvenLengthList && leftNode.next === node) || 
                    (!isEvenLengthList && leftNode === node)) {
                    result = true;
                    doneChecking = true;
                }
    
                return leftNode.next;
            }
            else {
                doneChecking = true;
                result = false;
                return null;
            }  
        }
    };

    recursiveStep(head, 1);

    return result;
};

module.exports = {isPalindrome};

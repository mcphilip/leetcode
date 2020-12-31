/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.count = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index + 1 > this.count) return -1;
    if (index === 0) return this.head.val;

    let node = this.head;
    for (let i = 0; i < index; i++) {
        node = node.next;
    }

    return node.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = {next: null, val: val};
    if (this.head) {
        node.next = this.head;
    }
    this.head = node;
    this.count++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = {next: null, val: val};
    this.count++;
    if (!this.head) {
        this.head = node;
        return;
    }
    let n = this.head;
    while (n.next) {
        n = n.next;
    }
    n.next = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.count) return;
    if (index === 0) return this.addAtHead(val);

    this.count++;
    const newNode = {next: null, val: val};

    // get the node prior to index
    let node = this.head;
    for (let i = 1; i < index; i++) {
        node = node.next;
    }

    newNode.next = node.next;
    node.next = newNode;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (this.count === 0 || index >= this.count) return;

    this.count--;

    //special case of head removal
    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let nodePrev = this.head;
    let nodeToDelete = this.head.next;
    for (let i = 1; i < index; i++) {
        nodePrev = nodePrev.next;
        nodeToDelete = nodeToDelete.next;
    }

    nodePrev.next = nodeToDelete.next;
};

 module.exports = {MyLinkedList};

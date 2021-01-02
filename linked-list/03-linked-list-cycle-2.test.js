const {detectCycle} = require('./03-linked-list-cycle-2');

describe('detectCycle', () => {
    it('should return null for null input', () => {
        expect(detectCycle(null)).toEqual(null);
    });
    it('should return null for undefined input', () => {
        expect(detectCycle()).toEqual(null);
    });
    it('should return null for single node', () => {
        const node = {next: null, val: 2};

        expect(detectCycle(node)).toEqual(null);
    });
    it('should return node1 for single node linked to itself', () => {
        const node1 = {next: null, val: 1};
        node1.next = node1;

        expect(detectCycle(node1)).toEqual(node1);
    });
    it('should return node1 for two node list with cycle', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: node1, val: 2};
        node1.next = node2;

        expect(detectCycle(node1)).toEqual(node1);
    });
    it('should return node2 for three node list with cycle', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: node2, val: 3};
        node1.next = node2;
        node2.next = node3;

        expect(detectCycle(node1)).toEqual(node2);
    });
    it('should return null for three node list without cycle', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        node1.next = node2;
        node2.next = node3;
        
        expect(detectCycle(node1)).toEqual(null);
    });
    it('should return head for three node list with cycle starting at head', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: node1, val: 3};
        node1.next = node2;
        node2.next = node3;

        expect(detectCycle(node1)).toEqual(node1);
    });
    it('should return second node for list with cycle starting at second node', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        const node4 = {next: null, val: 4};
        const node5 = {next: null, val: 5};
        const node6 = {next: null, val: 6};
        const node7 = {next: null, val: 7};
        const node8 = {next: null, val: 8};
        const node9 = {next: null, val: 9};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        node8.next = node9;
        node9.next = node2;

        expect(detectCycle(node1)).toEqual(node2);
    });
    it('should return third node for list with cycle starting at third node', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        const node4 = {next: null, val: 4};
        const node5 = {next: null, val: 5};
        const node6 = {next: null, val: 6};
        const node7 = {next: null, val: 7};
        const node8 = {next: null, val: 8};
        const node9 = {next: null, val: 9};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        node8.next = node9;
        node9.next = node3;

        expect(detectCycle(node1)).toEqual(node3);
    });
    it('should return fourth node for list with cycle starting at fourth node', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        const node4 = {next: null, val: 4};
        const node5 = {next: null, val: 5};
        const node6 = {next: null, val: 6};
        const node7 = {next: null, val: 7};
        const node8 = {next: null, val: 8};
        const node9 = {next: null, val: 9};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        node8.next = node9;
        node9.next = node4;

        expect(detectCycle(node1)).toEqual(node4);
    });
    it('should return fifth node for list with cycle starting at fifth node', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        const node4 = {next: null, val: 4};
        const node5 = {next: null, val: 5};
        const node6 = {next: null, val: 6};
        const node7 = {next: null, val: 7};
        const node8 = {next: null, val: 8};
        const node9 = {next: null, val: 9};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        node8.next = node9;
        node9.next = node5;

        expect(detectCycle(node1)).toEqual(node5);
    });
    it('should return sixth node for list with cycle starting at sixth node', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        const node4 = {next: null, val: 4};
        const node5 = {next: null, val: 5};
        const node6 = {next: null, val: 6};
        const node7 = {next: null, val: 7};
        const node8 = {next: null, val: 8};
        const node9 = {next: null, val: 9};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        node8.next = node9;
        node9.next = node6;

        expect(detectCycle(node1)).toEqual(node6);
    });
    it('should return seventh node for list with cycle starting at seventh node', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        const node4 = {next: null, val: 4};
        const node5 = {next: null, val: 5};
        const node6 = {next: null, val: 6};
        const node7 = {next: null, val: 7};
        const node8 = {next: null, val: 8};
        const node9 = {next: null, val: 9};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        node8.next = node9;
        node9.next = node7;

        expect(detectCycle(node1)).toEqual(node7);
    });
    it('should return eigth node for list with cycle starting at eigth node', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        const node4 = {next: null, val: 4};
        const node5 = {next: null, val: 5};
        const node6 = {next: null, val: 6};
        const node7 = {next: null, val: 7};
        const node8 = {next: null, val: 8};
        const node9 = {next: null, val: 9};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        node8.next = node9;
        node9.next = node8;

        expect(detectCycle(node1)).toEqual(node8);
    });
    it('should return ninth node for list with cycle starting at ninth node', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        const node4 = {next: null, val: 4};
        const node5 = {next: null, val: 5};
        const node6 = {next: null, val: 6};
        const node7 = {next: null, val: 7};
        const node8 = {next: null, val: 8};
        const node9 = {next: null, val: 9};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        node8.next = node9;
        node9.next = node9;

        expect(detectCycle(node1)).toEqual(node9);
    });
	it('should return second node for 4 node list with cycle starting at second node', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        const node4 = {next: null, val: 4};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node2;

        expect(detectCycle(node1)).toEqual(node2);
    });
});

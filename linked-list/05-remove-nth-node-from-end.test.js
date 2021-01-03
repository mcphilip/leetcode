const {removeNthFromEnd} = require('./05-remove-nth-node-from-end');

describe('removeNthFromEnd', () => {
    it('should return null for bad input', () => {
        expect(removeNthFromEnd(null, 1)).toEqual(null);
        expect(removeNthFromEnd({val: 1, next: null}, 0)).toEqual(null);
        expect(removeNthFromEnd(undefined, 1)).toEqual(null);
        expect(removeNthFromEnd({val: 1, next: null}, undefined)).toEqual(null);
    });
    it('should return null after removing head from single node list', () => {
        const head = {val: 1, next: null};

        expect(removeNthFromEnd(head, 1)).toEqual(null);
    });
    it('should return 2 after removing 1 from 1,2', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        node1.next = node2;

        const head = removeNthFromEnd(node1, 2);

        expect(head).toEqual(node2);
    });
    it('should return 1 after removing 1st node from end of 1,2', () => {
        const head = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        head.next = node2;

        const result = removeNthFromEnd(head, 1)

        expect(result.val).toEqual(1);
        expect(result.next).toEqual(null);
    });
    it('should return 1,2,3,5 after removing 2nd node from end of 1,2,3,4,5', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        const node4 = {val: 4, next: null};
        const node5 = {val: 5, next: null};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;

        const head = removeNthFromEnd(node1, 2);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(node3);
        expect(head.next.next.next).toEqual(node5);
    });
});

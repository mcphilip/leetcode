const {insert} = require('./13-insert-into-sorted-circular');

describe('insert', () => {
    it('should return null for bad data', () => {
        expect(insert(null, null)).toEqual(null);
        expect(insert(null)).toEqual(null);
        expect(insert()).toEqual(null);
    });
    it('should return single node if head is null', () => {
        const head = {val: 5, next: null};
        head.next = head;
        expect(insert(null, 5)).toEqual(head);
    });
    it('should handle single node list', () => {
        let head = {val: 5, next: null};
        head.next = head;
        
        head = insert(head, 6);

        expect(head).toEqual(head);
        expect(head.next.val).toEqual(6);
        expect(head.next.next).toEqual(head);
    });
    it('should handle edge case where head matches insertVal', () => {
        let originalHead = {val: 5, next: null};
        let node1 = {val: 1, next: originalHead};
        originalHead.next = node1;

        const head = insert(originalHead, 5);

        expect(head.val).toEqual(5);
        expect(head.next.val).toEqual(5);
        expect(head.next.next).toEqual(node1);
        expect(head.next.next.next.val).toEqual(5);
    });
    it('should handle [3,4,1], 4', () => {
        const originalHead = {val: 3};
        const node4 = {val: 4};
        const node1 = {val: 1};
        originalHead.next = node4;
        node4.next = node1;
        node1.next = originalHead;

        let head = insert(originalHead, 4);

        expect(head.val).toEqual(3);
        expect(head.next.val).toEqual(4);
        expect(head.next.next.val).toEqual(4);
        expect(head.next.next.next.val).toEqual(1);
        expect(head.next.next.next.next.val).toEqual(3);
    });
    it('should handle [3,5,1], 4', () => {
        const originalHead = {val: 3};
        const node5 = {val: 5};
        const node1 = {val: 1};
        originalHead.next = node5;
        node5.next = node1;
        node1.next = originalHead;

        let head = insert(originalHead, 4);

        expect(head.val).toEqual(3);
        expect(head.next.val).toEqual(4);
        expect(head.next.next.val).toEqual(5);
        expect(head.next.next.next.val).toEqual(1);
        expect(head.next.next.next.next.val).toEqual(3);
    });
    it('should handle [3,5,1], 2', () => {
        const originalHead = {val: 3};
        const node5 = {val: 5};
        const node1 = {val: 1};
        originalHead.next = node5;
        node5.next = node1;
        node1.next = originalHead;

        let head = insert(originalHead, 2);

        expect(head.val).toEqual(3);
        expect(head.next.val).toEqual(5);
        expect(head.next.next.val).toEqual(1);
        expect(head.next.next.next.val).toEqual(2);
        expect(head.next.next.next.next.val).toEqual(3);
    });
    it('should handle [3,5,1], -1', () => {
        const originalHead = {val: 3};
        const node5 = {val: 5};
        const node1 = {val: 1};
        originalHead.next = node5;
        node5.next = node1;
        node1.next = originalHead;

        let head = insert(originalHead, -1);

        expect(head.val).toEqual(3);
        expect(head.next.val).toEqual(5);
        expect(head.next.next.val).toEqual(-1);
        expect(head.next.next.next.val).toEqual(1);
        expect(head.next.next.next.next.val).toEqual(3);
    });    
    it('should handle [1,1,1], -1', () => {
        const node1 = {val: 1};
        const node2 = {val: 1};
        const node3 = {val: 1};
        node1.next = node2;
        node2.next = node3;
        node3.next = node1;

        let head = insert(node1, -1);

        expect(head.val).toEqual(1);
        expect(head.next.val).toEqual(1);
        expect(head.next.next.val).toEqual(1);
        expect(head.next.next.next.val).toEqual(-1);
        expect(head.next.next.next.next.val).toEqual(1);
    });
    it('should handle [1,3,5], 4', () => {
        const node1 = {val: 1};
        const node2 = {val: 3};
        const node3 = {val: 5};
        node1.next = node2;
        node2.next = node3;
        node3.next = node1;

        let head = insert(node1, 4);

        expect(head.val).toEqual(1);
        expect(head.next.val).toEqual(3);
        expect(head.next.next.val).toEqual(4);
        expect(head.next.next.next.val).toEqual(5);
        expect(head.next.next.next.next.val).toEqual(1);
    });
    it('should handle [3,5,1], 6', () => {
        const node1 = {val: 3};
        const node2 = {val: 5};
        const node3 = {val: 1};
        node1.next = node2;
        node2.next = node3;
        node3.next = node1;

        let head = insert(node1, 6);

        expect(head.val).toEqual(3);
        expect(head.next.val).toEqual(5);
        expect(head.next.next.val).toEqual(6);
        expect(head.next.next.next.val).toEqual(1);
        expect(head.next.next.next.next.val).toEqual(3);
    });
});

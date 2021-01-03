const {reverseList} = require('./06-1-reverse-list-iterative');

describe('reverseList', () => {
    it('should return null for bad input', () => {
        expect(reverseList(null)).toEqual(null);
        expect(reverseList(undefined)).toEqual(null);
    });
    it('should return head if list is one node long', () => {
        const node1 = {val: 1, next: null};
        expect(reverseList(node1)).toEqual(node1);
    });
    it('should reverse 2 node list', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        node1.next = node2;

        const head = reverseList(node1);
        expect(head).toEqual(node2);
        expect(head.next).toEqual(node1);
        expect(head.next.next).toEqual(null);
    });
    it('should reverse 3 node list', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        node1.next = node2;
        node2.next = node3;

        const head = reverseList(node1);
        expect(head).toEqual(node3);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(node1);
        expect(head.next.next.next).toEqual(null);
    });
    it('should reverse 9 node list', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        const node4 = {val: 4, next: null};
        const node5 = {val: 5, next: null};
        const node6 = {val: 6, next: null};
        const node7 = {val: 7, next: null};
        const node8 = {val: 8, next: null};
        const node9 = {val: 9, next: null};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
        node6.next = node7;
        node7.next = node8;
        node8.next = node9;

        const head = reverseList(node1);
        expect(head).toEqual(node9);
        expect(head.next).toEqual(node8);
        expect(head.next.next).toEqual(node7);
        expect(head.next.next.next).toEqual(node6);
        expect(head.next.next.next.next).toEqual(node5);
        expect(head.next.next.next.next.next).toEqual(node4);
        expect(head.next.next.next.next.next.next).toEqual(node3);
        expect(head.next.next.next.next.next.next.next).toEqual(node2);
        expect(head.next.next.next.next.next.next.next.next).toEqual(node1);
        expect(head.next.next.next.next.next.next.next.next.next).toEqual(null);
    });
});

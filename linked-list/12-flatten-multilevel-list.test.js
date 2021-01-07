const {flatten} = require('./12-flatten-multilevel-list');

describe('flatten', () => {
    it('should return null for bad input', () => {
        expect(flatten(null)).toEqual(null);
        expect(flatten()).toEqual(null);
    });
    it('should return head if it is a single node without a child', () => {
        const node1 = {val: 1, next: null, child: null};
        const head = flatten(node1);

        expect(head).toEqual(node1);
        expect(head.next).toEqual(null);
        expect(head.child).toEqual(null);
    });
    it('should return unchanged list if single level', () => {
        const node3 = {val: 3, next: null, prev: null, child: null};
        const node2 = {val: 2, next: node3, prev: null, child: null};
        const node1 = {val: 1, next: node2, prev: null, child: null};
        node3.prev = node2;
        node2.prev = node1;

        const head = flatten(node1);
        
        expect(head).toEqual(node1);
        expect(head.child).toEqual(null);
        expect(head.next).toEqual(node2);
        expect(head.next.prev).toEqual(node1);
        expect(head.next.child).toEqual(null);
        expect(head.next.next).toEqual(node3);
        expect(head.next.next.prev).toEqual(node2);
        expect(head.next.next.child).toEqual(null);
        expect(head.next.next.next).toEqual(null);
    });
    it('should handle leetcode testcase #1', () => {
        const node3 = {val: 3, next: null, prev: null, child: null};
        const node2 = {val: 2, next: null, prev: null, child: null};
        const node1 = {val: 1, next: node2, prev: null, child: node3};
        node2.prev = node1;

        const head = flatten(node1);

        expect(head).toEqual(node1);
        expect(head.child).toEqual(null);
        expect(head.next).toEqual(node3);
        expect(head.next.prev).toEqual(node1);
        expect(head.next.next).toEqual(node2);
        expect(head.next.next.prev).toEqual(node3);
        expect(head.next.next.next).toEqual(null);
    });
    it('should handle ancestry stack', () => {
        const node3 = {val: 3, next: null, prev: null, child: null};
        const node2 = {val: 2, next: null, prev: null, child: node3};
        const node1 = {val: 1, next: null, prev: null, child: node2};

        const head = flatten(node1);

        expect(head).toEqual(node1);
        expect(head.child).toEqual(null);
        expect(head.next).toEqual(node2);
        expect(head.next.child).toEqual(null);
        expect(head.next.next).toEqual(node3);
    });
    it('should handle failed test case #1', () => {
        const node1 = {val: 1, next: null, prev: null, child: null};
        const node2 = {val: 2, next: null, prev: null, child: null};
        const node3 = {val: 3, next: null, prev: null, child: null};
        const node4 = {val: 4, next: null, prev: null, child: null};
        const node5 = {val: 5, next: null, prev: null, child: null};
        const node6 = {val: 6, next: null, prev: null, child: null};
        const node7 = {val: 7, next: null, prev: null, child: null};
        const node8 = {val: 8, next: null, prev: null, child: null};
        const node9 = {val: 9, next: null, prev: null, child: null};
        const node10 = {val: 10, next: null, prev: null, child: null};
        const node11 = {val: 11, next: null, prev: null, child: null};
        const node12 = {val: 12, next: null, prev: null, child: null};
        node1.next = node2;
        node2.next = node3;
        node2.prev = node1;
        node3.next = node4;
        node3.prev = node2;
        node4.next = node5;
        node4.prev = node3;
        node5.next = node6;
        node5.prev = node4;
        node6.prev = node5;
        node7.next = node8;
        node8.next = node9;
        node8.prev = node7;
        node9.next = node10;
        node9.prev = node8;
        node10.prev = node9;
        node11.next = node12;
        node12.prev = node11;

        node3.child = node7;
        node8.child = node11;

        const head = flatten(node1);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(node3);
        expect(head.next.next.next).toEqual(node7);
        expect(head.next.next.next.next).toEqual(node8);
        expect(head.next.next.next.next.next).toEqual(node11);
        expect(head.next.next.next.next.next.next).toEqual(node12);
        expect(head.next.next.next.next.next.next.next).toEqual(node9);
        expect(head.next.next.next.next.next.next.next.next).toEqual(node10);
        expect(head.next.next.next.next.next.next.next.next.next).toEqual(node4);
        expect(head.next.next.next.next.next.next.next.next.next.next).toEqual(node5);
        expect(head.next.next.next.next.next.next.next.next.next.next.next).toEqual(node6);
        expect(head.next.next.next.next.next.next.next.next.next.next.next.next).toEqual(null);
    });
});

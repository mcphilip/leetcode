const {copyRandomList} = require('./14-copy-random-list');

describe('copyRandomList', () => {
    it('should handle bad input', () => {
        expect(copyRandomList(null)).toEqual(null);
    });
    it('should copy list with no random links', () => {
        const node1 = {val: 1, random: null};
        const node2 = {val: 2, random: null};
        const node3 = {val: 3, random: null};
        node1.next = node2;
        node2.next = node3;

        const nodeSet = new Set();
        nodeSet.add(node1);
        nodeSet.add(node2);
        nodeSet.add(node3);

        const head = copyRandomList(node1);

        expect(false).toEqual(nodeSet.has(head));
        expect(head.val).toEqual(node1.val);
        expect(head.random).toEqual(null);
        expect(false).toEqual(nodeSet.has(head.next));
        expect(head.next.val).toEqual(node2.val);
        expect(head.next.random).toEqual(null);
        expect(false).toEqual(nodeSet.has(head.next.next));
        expect(head.next.next.val).toEqual(node3.val);
        expect(head.next.next.random).toEqual(null);
        expect(head.next.next.next).toEqual(null);
    });
    it('should handle leetcode test case', () => {
        const node1 = {val: 7};
        const node2 = {val: 13};
        const node3 = {val: 11};
        const node4 = {val: 10};
        const node5 = {val: 1};
        node1.next = node2;
        node1.random = null;
        node2.next = node3;
        node2.random = node1;
        node3.next = node4;
        node3.random = node5;
        node4.next = node5;
        node4.random = node3;
        node5.next = null;
        node5.random = node1;

        const nodeSet = new Set();
        nodeSet.add(node1);
        nodeSet.add(node2);
        nodeSet.add(node3);
        nodeSet.add(node4);
        nodeSet.add(node5);

        const head = copyRandomList(node1);

        expect(false).toEqual(nodeSet.has(head));
        expect(false).toEqual(nodeSet.has(head.next));
        expect(false).toEqual(nodeSet.has(head.next.next));
        expect(false).toEqual(nodeSet.has(head.next.next.next));
        expect(false).toEqual(nodeSet.has(head.next.next.next.next));
        expect(head.val).toEqual(node1.val);
        expect(head.next.val).toEqual(node2.val);
        expect(head.next.next.val).toEqual(node3.val);
        expect(head.next.next.next.val).toEqual(node4.val);
        expect(head.next.next.next.next.val).toEqual(node5.val);
        expect(head.next.next.next.next.next).toEqual(null);
        expect(head.random).toEqual(null);
        expect(head.next.random.val).toEqual(node2.random.val);
        expect(head.next.next.random.val).toEqual(node3.random.val);
        expect(head.next.next.next.random.val).toEqual(node4.random.val);
        expect(head.next.next.next.next.random.val).toEqual(node5.random.val);
        expect(head.next.next.next.next.next).toEqual(null);
    });
});

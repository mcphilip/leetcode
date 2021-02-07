const {reverseList} = require('./03-reverse-linked-list');

describe('reverseList', () => {
    it('should handle bad input', () => {
        expect(reverseList(null)).toEqual(null);
        expect(reverseList()).toEqual(null);
    });
    it('should handle 1 node', () => {
        const node1 = {val: 1, next: null};

        const head = reverseList(node1);

        expect(head).toEqual(node1);
        expect(head.next).toEqual(null);
    });
    it('should handle 2 nodes', () => {
        const node2 = {val: 2, next: null}
        const node1 = {val: 1, next: node2};

        const head = reverseList(node1);

        expect(head.val).toEqual(2);
        expect(head.next.val).toEqual(1);
        expect(head.next.next).toEqual(null);
    });
    it('should handle 3 nodes', () => {
        const node3 = {val: 3, next: null};
        const node2 = {val: 2, next: node3}
        const node1 = {val: 1, next: node2};

        const head = reverseList(node1);

        expect(head.val).toEqual(3);
        expect(head.next.val).toEqual(2);
        expect(head.next.next.val).toEqual(1);
        expect(head.next.next.next).toEqual(null);
    });
});

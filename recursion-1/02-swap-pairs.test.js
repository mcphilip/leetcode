const {swapPairs} = require('./02-swap-pairs');

describe('swapPairs', () => {
    it('should handle example #1', () => {
        const node4 = {val: 4, next: null};
        const node3 = {val: 3, next: node4};
        const node2 = {val: 2, next: node3};
        const node1 = {val: 1, next: node2};

        const head = swapPairs(node1);

        expect(head.val).toEqual(node2.val);
        expect(head.next.val).toEqual(node1.val);
        expect(head.next.next.val).toEqual(node4.val);
        expect(head.next.next.next.val).toEqual(node3.val);
    });
    it('should handle example #2', () => {
        expect(swapPairs(null)).toEqual(null);
        expect(swapPairs()).toEqual(null);
    });
    it('should handle example #3', () => {
        const node1 = {val: 1, next: null};
        
        const head = swapPairs(node1);

        expect(head).toEqual(node1);
        expect(head.next).toEqual(null);
    });
    it('should handle 2 nodes', () => {
        const node2 = {val: 2, next: null};
        const node1 = {val: 1, next: node2};

        const head = swapPairs(node1);

        expect(head.val).toEqual(node2.val);
        expect(head.next).toEqual(node1);
    })
});

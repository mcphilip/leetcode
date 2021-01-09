const {rotateRight} = require('./15-rotate-list');

describe('rotateRight', () => {
    it('should handle bad input', () => {
        expect(rotateRight(null, 1)).toEqual(null);
        expect(rotateRight(undefined, 1)).toEqual(null);
        expect(rotateRight({val: 1}, null)).toEqual(null);
        expect(rotateRight({val: 1})).toEqual(null);
    });
    it('should handle [1], k=n', () => {
        const node1 = {val: 5, next: null};

        expect(rotateRight(node1, 10)).toEqual(node1);
    });
    it('should handle [1,...,n}, k=n', () => {
        const node5 = {val: 5, next: null};
        const node4 = {val: 4, next: node5};
        const node3 = {val: 3, next: node4};
        const node2 = {val: 2, next: node3};
        const node1 = {val: 1, next: node2};

        const head = rotateRight(node1, 5);

        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(node3);
        expect(head.next.next.next).toEqual(node4);
        expect(head.next.next.next.next).toEqual(node5);
        expect(head.next.next.next.next.next).toEqual(null);
    });
    it('should handle [1,2], k=1', () => {
        const node2 = {val: 2, next: null};
        const node1 = {val: 1, next: node2};

        const head = rotateRight(node1, 1);

        expect(head).toEqual(node2);
        expect(head.next).toEqual(node1);
    });
    it('should handle [1,2,3,4,5], k=2', () => {
        const node5 = {val: 5, next: null};
        const node4 = {val: 4, next: node5};
        const node3 = {val: 3, next: node4};
        const node2 = {val: 2, next: node3};
        const node1 = {val: 1, next: node2};

        const head = rotateRight(node1, 2);

        expect(head).toEqual(node4);
        expect(head.next).toEqual(node5);
        expect(head.next.next).toEqual(node1);
        expect(head.next.next.next).toEqual(node2);
        expect(head.next.next.next.next).toEqual(node3);
    })
    it('should handle [1,...,n}, k > n', () => {
        const node5 = {val: 5, next: null};
        const node4 = {val: 4, next: node5};
        const node3 = {val: 3, next: node4};
        const node2 = {val: 2, next: node3};
        const node1 = {val: 1, next: node2};

        const head = rotateRight(node1, 6);

        expect(head).toEqual(node5);
        expect(head.next).toEqual(node1);
        expect(head.next.next).toEqual(node2);
        expect(head.next.next.next).toEqual(node3);
        expect(head.next.next.next.next).toEqual(node4);
        expect(head.next.next.next.next.next).toEqual(null);
    });
    it('should handle [0,1,2], k=4', () => {
        const node3 = {val: 2, next: null};
        const node2 = {val: 1, next: node3};
        const node1 = {val: 0, next: node2};

        const head = rotateRight(node1, 4);

        expect(head).toEqual(node3);
        expect(head.next).toEqual(node1);
        expect(head.next.next).toEqual(node2);
    });
});

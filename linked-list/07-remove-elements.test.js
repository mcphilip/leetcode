const {removeElements} = require('./07-remove-elements');

describe('removeElements', () => {
    it('should return null for bad input', () => {
        expect(removeElements(null, 1)).toEqual(null);
        const head = {val: 1, next: null};
        expect(removeElements(head, null)).toEqual(head);
        expect(removeElements()).toEqual(null);
        expect(removeElements(head)).toEqual(head);
    });
    it('should return unchanged list if no values found to be replaced', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        node1.next = node2;
        node2.next = node3;

        const head = removeElements(node1, 4);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(node3);
        expect(head.next.next.next).toEqual(null);
    });
    it('should return null removing only node from list', () => {
        const node1 = {val: 1, next: null};

        const head = removeElements(node1, 1);
        expect(head).toEqual(null);
    });
    it('should return null when removing all elements from list', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 1, next: null};
        const node3 = {val: 1, next: null};
        const node4 = {val: 1, next: null};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;

        expect(removeElements(node1, 1)).toEqual(null);
    });
    it('should return tail node when all but tail removed from list', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 1, next: null};
        const node3 = {val: 1, next: null};
        const node4 = {val: 2, next: null};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;

        const head = removeElements(node1, 1);

        expect(head).toEqual(node4);
        expect(head.next).toEqual(null);
    });
    it('should return several nodes scattered throughout list', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 1, next: null};
        const node4 = {val: 4, next: null};
        const node5 = {val: 1, next: null};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;

        const head = removeElements(node1, 1);

        expect(head).toEqual(node2);
        expect(head.next).toEqual(node4);
        expect(head.next.next).toEqual(null);
    });
});

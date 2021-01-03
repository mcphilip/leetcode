const {oddEvenList} = require('./08-odd-even-list');

describe('oddEvenList', () => {
    it('should return null for bad input', () => {
        expect(oddEvenList(null)).toEqual(null);
        expect(oddEvenList()).toEqual(null);
    });
    it('should return list unchanged for one or two node lists', () => {
        const node1 = {val: 1, next: null};
        expect(oddEvenList(node1)).toEqual(node1);

        const node2 = {val: 2, next: null};
        node1.next = node2;

        const head = oddEvenList(node1);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(null);
    });
    it('should correctly order 3 node list', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        node1.next = node2;
        node2.next = node3;

        const head = oddEvenList(node1);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node3);
        expect(head.next.next).toEqual(node2);
        expect(head.next.next.next).toEqual(null);
    });
    it('should correctly order 4 node list', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        const node4 = {val: 4, next: null};
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;

        const head = oddEvenList(node1);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node3);
        expect(head.next.next).toEqual(node2);
        expect(head.next.next.next).toEqual(node4);
        expect(head.next.next.next.next).toEqual(null);
    });
});

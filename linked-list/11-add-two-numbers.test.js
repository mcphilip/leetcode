const {addTwoNumbers} = require('./11-add-two-numbers');

describe('addTwoNumbers', () => {
    it('should return null for bad input', () => {
        const node1 = {val: 1, next: null};
        expect(addTwoNumbers(null, node1)).toEqual(null);
        expect(addTwoNumbers(node1, null)).toEqual(null);
        expect(addTwoNumbers(null, null)).toEqual(null);
        expect(addTwoNumbers(undefined, node1)).toEqual(null);
        expect(addTwoNumbers(node1, undefined)).toEqual(null);
        expect(addTwoNumbers()).toEqual(null);
    });
    it('should return l1 when l2 = [0]', () => {
        const node0 = {val: 0, next: null};
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        node1.next = node2;

        const head = addTwoNumbers(node1, node0);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(null);
    });
    it('should return l2 when l1 = [0]', () => {
        const node0 = {val: 0, next: null};
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        node1.next = node2;

        const head = addTwoNumbers(node0, node1);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(null);
    });
    it('should return [0] when both lists are [0]', () => {
        const l1 = {val: 0, next: null};
        const l2 = {val: 0, next: null};

        const head = addTwoNumbers(l1, l2);
        expect(head.val).toEqual(0);
        expect(head.next).toEqual(null);
    });
    it('should return [7,0,8] for [2,4,3] + [5,6,4]', () => {
        const l1N1 = {val: 2, next: null};
        const l1N2 = {val: 4, next: null};
        const l1N3 = {val: 3, next: null};
        l1N1.next = l1N2;
        l1N2.next = l1N3;

        const l2N1 = {val: 5, next: null};
        const l2N2 = {val: 6, next: null};
        const l2N3 = {val: 4, next: null};
        l2N1.next = l2N2;
        l2N2.next = l2N3;

        const head = addTwoNumbers(l1N1, l2N1);

        expect(head.val).toEqual(7);
        expect(head.next.val).toEqual(0);
        expect(head.next.next.val).toEqual(8);
        expect(head.next.next.next).toEqual(null);
    });
    it('should return [8,9,9,9,0,0,0,1] for [9,9,9,9,9,9,9] + [9,9,9,9]', () => {
        const l1N7 = {val: 9, next: null};
        const l1N6 = {val: 9, next: l1N7};
        const l1N5 = {val: 9, next: l1N6};
        const l1N4 = {val: 9, next: l1N5};
        const l1N3 = {val: 9, next: l1N4};
        const l1N2 = {val: 9, next: l1N3};
        const l1N1 = {val: 9, next: l1N2};

        const l2N4 = {val: 9, next: null};
        const l2N3 = {val: 9, next: l2N4};
        const l2N2 = {val: 9, next: l2N3};
        const l2N1 = {val: 9, next: l2N2};

        const head = addTwoNumbers(l1N1, l2N1);

        expect(head.val).toEqual(8);
        expect(head.next.val).toEqual(9);
        expect(head.next.next.val).toEqual(9);
        expect(head.next.next.next.val).toEqual(9);
        expect(head.next.next.next.next.val).toEqual(0);
        expect(head.next.next.next.next.next.val).toEqual(0);
        expect(head.next.next.next.next.next.next.val).toEqual(0);
        expect(head.next.next.next.next.next.next.next.val).toEqual(1);
        expect(head.next.next.next.next.next.next.next.next).toEqual(null);
    });
});

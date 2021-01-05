const {mergeTwoLists} = require('./10-merge-sorted-lists');

describe('mergeTwoLists', () => {
    it('should return null for null or undefined inputs', () => {
        expect(mergeTwoLists(null,null)).toEqual(null);
        expect(mergeTwoLists()).toEqual(null);
    });
    it('should return l1 when only l1 exists', () => {
        const node1 = {val: 1, next: null};

        let head = mergeTwoLists(node1, null);
        expect(head).toEqual(node1);
        
        head = mergeTwoLists(node1);
        expect(head).toEqual(node1);
    });
    it('should return l2 when only l2 exists', () => {
        const node1 = {val: 1, next: null};

        let head = mergeTwoLists(null, node1);
        expect(head).toEqual(node1);
        
        head = mergeTwoLists(undefined, node1);
        expect(head).toEqual(node1);
    });
    it('should merge two single node lists', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};

        const head = mergeTwoLists(node1, node2);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(null);
    });
    it('should merge [1,2,3], [4,5,6] correctly', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        const node4 = {val: 4, next: null};
        const node5 = {val: 5, next: null};
        const node6 = {val: 6, next: null};

        node1.next = node2;
        node2.next = node3;

        node4.next = node5;
        node5.next = node6;

        const head = mergeTwoLists(node1, node4);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(node3);
        expect(head.next.next.next).toEqual(node4);
        expect(head.next.next.next.next).toEqual(node5);
        expect(head.next.next.next.next.next).toEqual(node6);
        expect(head.next.next.next.next.next.next).toEqual(null);
    });

    it('should merge [4,5,6], [1,2,3] correctly', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        const node4 = {val: 4, next: null};
        const node5 = {val: 5, next: null};
        const node6 = {val: 6, next: null};

        node1.next = node2;
        node2.next = node3;

        node4.next = node5;
        node5.next = node6;

        const head = mergeTwoLists(node4, node1);
        expect(head).toEqual(node1);
        expect(head.next).toEqual(node2);
        expect(head.next.next).toEqual(node3);
        expect(head.next.next.next).toEqual(node4);
        expect(head.next.next.next.next).toEqual(node5);
        expect(head.next.next.next.next.next).toEqual(node6);
        expect(head.next.next.next.next.next.next).toEqual(null);
    });
});

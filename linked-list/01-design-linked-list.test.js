const {MyLinkedList} = require('./01-design-linked-list');

describe('MyLinkedList', () => {
    it('get(i) should return -1 for empty list', () => {
        const ll = new MyLinkedList();
        expect(ll.get(0)).toEqual(-1);
    });
    it('addAtHead(val) should return val for get(0)', () => {
        const ll = new MyLinkedList();
        ll.addAtHead(10);
        expect(ll.get(0)).toEqual(10);
    });
    it('addAtHead(val1), addAtHead(val2) should return val2 for get(0), val1 for get(1)', () => {
        const ll = new MyLinkedList();
        ll.addAtHead(5);
        ll.addAtHead(6);
        expect(ll.get(0)).toEqual(6);
        expect(ll.get(1)).toEqual(5);
    });
    it('addAtTail(val) on empty list returns val for get(0)', () => {
        const ll = new MyLinkedList();
        ll.addAtTail(5);
        expect(ll.get(0)).toEqual(5);
    });
    it('addAtTail multiple times should work as expected', () => {
        const ll = new MyLinkedList();
        ll.addAtTail(5);
        ll.addAtTail(6);
        ll.addAtTail(7);
        expect(ll.get(0)).toEqual(5);
        expect(ll.get(1)).toEqual(6);
        expect(ll.get(2)).toEqual(7);
    });
    it('addAtIndex(1) should do nothing to empty linked list', () => {
        const ll = new MyLinkedList();
        ll.addAtIndex(1, 10);
        expect(ll.get(0)).toEqual(-1);
    })
    it('addAtIndex(0) should add at head', () => {
        const ll = new MyLinkedList();
        ll.addAtHead(10);
        ll.addAtIndex(0, 9);
        expect(ll.get(0)).toEqual(9);
        expect(ll.get(1)).toEqual(10);
    });
    it('addAtIndex(ll.length-1, val) should be same as addAtTail(val)', () => {
        const ll = new MyLinkedList();
        ll.addAtHead(1);
        ll.addAtHead(2);
        ll.addAtIndex(2, 3);
        expect(ll.get(0)).toEqual(2);
        expect(ll.get(1)).toEqual(1);
        expect(ll.get(2)).toEqual(3);

        const ll2 = new MyLinkedList();
        ll2.addAtHead(1);
        ll2.addAtHead(2);
        ll2.addAtTail(3);
        expect(ll2.get(0)).toEqual(2);
        expect(ll2.get(1)).toEqual(1);
        expect(ll2.get(2)).toEqual(3);
    });
    it('addAtIndex in middle of list should behave as expected', () => {
        const ll = new MyLinkedList();
        ll.addAtHead(1);
        ll.addAtTail(4);
        ll.addAtIndex(1, 2);
        ll.addAtIndex(2, 3);
        expect(ll.get(0)).toEqual(1);
        expect(ll.get(1)).toEqual(2);
        expect(ll.get(2)).toEqual(3);
        expect(ll.get(3)).toEqual(4);
    });
    it('deleteAtIndex should do crash when list is empty', () => {
        const ll = new MyLinkedList();
        ll.deleteAtIndex(0);
        expect(ll.get(0)).toEqual(-1);
    });
    it('deleteAtIndex(0) should remove head', () => {
        const ll = new MyLinkedList();
        ll.addAtHead(1);
        ll.addAtHead(2);
        ll.deleteAtIndex(0);
        expect(ll.get(0)).toEqual(1);
        expect(ll.get(1)).toEqual(-1);
    });
    it('deleteAtIndex should work for tail node', () => {
        const ll = new MyLinkedList();
        ll.addAtHead(1);
        ll.addAtIndex(1, 2);
        ll.addAtTail(3);
        ll.deleteAtIndex(2);
        ll.addAtTail(4);
        expect(ll.get(0)).toEqual(1);
        expect(ll.get(1)).toEqual(2);
        expect(ll.get(2)).toEqual(4);
    });
    it('deleteAtIndex should work as expected in middle of list', () => {
        const ll = new MyLinkedList();
        ll.addAtHead(5);
        ll.addAtHead(4);
        ll.addAtHead(3);
        ll.addAtHead(2);
        ll.addAtHead(1);
        ll.deleteAtIndex(1);
        ll.deleteAtIndex(2);
        expect(ll.get(0)).toEqual(1);
        expect(ll.get(1)).toEqual(3);
        expect(ll.get(2)).toEqual(5);
        expect(ll.get(3)).toEqual(-1);
    });
});

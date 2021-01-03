const {getIntersectionNode, getNthNode} = require('./04-find-intersection');

describe('getNthNode', () => {
    it('should return null for null input', () => {
        expect(getNthNode(null, 1)).toEqual(null);
    });
    it('should return null for undefined input', () =>{
        expect(getNthNode()).toEqual(null);
    });
    it('should return nth node', () => {
        const node1 = {val: 1, next: null};
        const node2 = {val: 2, next: null};
        const node3 = {val: 3, next: null};
        node1.next = node2;
        node2.next = node3;

        expect(getNthNode(node1, 3)).toEqual(node3);
    });
});

describe('getIntersectionNode', () => {
    it('should return null for null input', () => {
        const node = {val: 1};
        expect(getIntersectionNode(null, node)).toEqual(null);
        expect(getIntersectionNode(node, null)).toEqual(null);
    });
    it('should return null for undefined input', () => {
        const node = {val: 1};
        expect(getIntersectionNode(undefined, node)).toEqual(null);
        expect(getIntersectionNode(node)).toEqual(null);
    });
    it('should return head for list intersecting at head node', () => {
        const node = {val: 1};
        expect(getIntersectionNode(node, node)).toEqual(node);
    });
    it('should return null for lists that do not intersect', () => {
        const nodeA1 = {val: 1, next: null};
        const nodeA2 = {val: 2, next: null};
        nodeA1.next = nodeA2;

        const nodeB1 = {val: 1, next: null};
        const nodeB2 = {val: 2, next: null};
        nodeB1.next = nodeB2;

        expect(getIntersectionNode(nodeA1, nodeB1)).toEqual(null);
    });
    it('should return intersection node when lists intersect on second node in list', () => {
        const nodeA1 = {val: 1, next: null};
        const nodeA2 = {val: 2, next: null};
        const nodeA3 = {val: 3, next: null};
        nodeA1.next = nodeA2;
        nodeA2.next = nodeA3;

        const nodeB1 = {val: 1, next: null};
        nodeB1.next = nodeA2;

        expect(getIntersectionNode(nodeA1, nodeB1)).toEqual(nodeA2);
    });
    it('should return intersection node when lists intersect at last node in equal length list', () => {
        const nodeA1 = {val: 1, next: null};
        const nodeA2 = {val: 2, next: null};
        const nodeA3 = {val: 3, next: null};
        nodeA1.next = nodeA2;
        nodeA2.next = nodeA3;

        const nodeB1 = {val: 1, next: null};
        const nodeB2 = {val: 2, next: null};
        nodeB1.next = nodeB2;
        nodeB2.next = nodeA3;

        expect(getIntersectionNode(nodeA1, nodeB1)).toEqual(nodeA3);
    });
    it('should return intersection node when lists intersect at 3rd node in equal length pre-list', () => {
        const nodeA1 = {val: 1, next: null};
        const nodeA2 = {val: 2, next: null};
        const nodeA3 = {val: 3, next: null};
        const nodeA4 = {val: 4, next: null};
        nodeA1.next = nodeA2;
        nodeA2.next = nodeA3;
        nodeA3.next = nodeA4;

        const nodeB1 = {val: 1, next: null};
        const nodeB2 = {val: 2, next: null};
        nodeB1.next = nodeB2;
        nodeB2.next = nodeA3;

        expect(getIntersectionNode(nodeA1, nodeB1)).toEqual(nodeA3);
    });
	it('should return intersection node when lists intersect at 3rd node in unequal length pre-list', () => {
        const nodeA1 = {val: 1, next: null};
        const nodeA2 = {val: 2, next: null};
        const nodeA3 = {val: 3, next: null};
        const nodeA4 = {val: 4, next: null};
        nodeA1.next = nodeA2;
        nodeA2.next = nodeA3;
        nodeA3.next = nodeA4;

        const nodeB1 = {val: 1, next: null};
        nodeB1.next = nodeA3;

        expect(getIntersectionNode(nodeA1, nodeB1)).toEqual(nodeA3);
    });
});

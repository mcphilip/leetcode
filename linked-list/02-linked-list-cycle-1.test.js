const {hasCycle} = require('./02-linked-list-cycle-1');

describe('hasCycle', () => {
    it('should return false for null input', () => {
        expect(hasCycle(null)).toEqual(false);
    });
    it('should return false for undefined input', () => {
        expect(hasCycle()).toEqual(false);
    });
    it('should return false for single node', () => {
        const node = {next: null, val: 2};

        expect(hasCycle(node)).toEqual(false);
    });
    it('should return true for single node linked to itself', () => {
        const node1 = {next: null, val: 1};
        node1.next = node1;

        expect(hasCycle(node1)).toEqual(true);
    });
    it('should return true for two node list with cycle', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: node1, val: 2};
        node1.next = node2;

        expect(hasCycle(node1)).toEqual(true);
    });
    it('should return true for three node list with cycle', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: node2, val: 3};
        node1.next = node2;
        node2.next = node3;

        expect(hasCycle(node1)).toEqual(true);
    });
    it('should return false for three node list without cycle', () => {
        const node1 = {next: null, val: 1};
        const node2 = {next: null, val: 2};
        const node3 = {next: null, val: 3};
        node1.next = node2;
        node2.next = node3;
        
        expect(hasCycle(node1)).toEqual(false);
    });
});

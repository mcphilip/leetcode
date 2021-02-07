const {searchBST} = require('./04-search-BST');

describe('searchBST', () => {
    it('should handle example #1', () => {
        const node1 = {val: 1, left: null, right: null};
        const node3 = {val: 3, left: null, right: null};
        const node2 = {val: 2, left: node1, right: node3};
        const node7 = {val: 7, left: null, right: null};
        const node4 = {val: 4, left: node2, right: node7};

        const head = searchBST(node4, 2);

        expect(head).toEqual(node2);
    });
    it('should handle example #2', () => {
        const node1 = {val: 1, left: null, right: null};
        const node3 = {val: 3, left: null, right: null};
        const node2 = {val: 2, left: node1, right: node3};
        const node7 = {val: 7, left: null, right: null};
        const node4 = {val: 4, left: node2, right: node7};

        const head = searchBST(node4, 5);

        expect(head).toEqual(null);
    });
    it('should handle single node input', () => {
        const node1 = {val: 1, left: null, right: null};

        expect(searchBST(node1,1)).toEqual(node1);
        expect(searchBST(node1, 2)).toEqual(null);
    });
});

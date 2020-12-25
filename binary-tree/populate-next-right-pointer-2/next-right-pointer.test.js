const { connect, setupTree, treeToArrayWithNextPointer } = require('./next-right-pointer');

describe('treeToArrayWithNextPointer', () => {
    it('should return correct array for leetcode example tree', () => {
        const tree = setupTree([1,2,3,4,5,null,7]);

        // manually preform linking that will ultimately be done in connect()
        tree.left.next = tree.right;
        tree.left.left.next = tree.left.right;
        tree.left.right.next = tree.right.right;

        expect(treeToArrayWithNextPointer(tree)).toEqual([1,'#',2,3,'#',4,5,7,'#']);
    });
});

describe('connect', () => {
    it('should return correct serialized tree for null input', () => {
        expect(treeToArrayWithNextPointer(connect(null))).toEqual([]);
    });
    it('should return correct serialized tree for leetcode example tree', () => {
        const tree = setupTree([1,2,3,4,5,null,7]);
        const wiredUpTree = connect(tree);

        expect(treeToArrayWithNextPointer(wiredUpTree)).toEqual([1,'#',2,3,'#',4,5,7,'#']);
    })
})

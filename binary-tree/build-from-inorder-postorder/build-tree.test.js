const { buildTree, setupTree, treeToArray } = require('./build-tree');

describe('treeToArray', () => {
    it('should return empty array if tree is null', () => {
        expect(treeToArray(null)).toEqual([]);
    });
    it('should return single item array if tree is one node', () => {
        const treeDefinition = [2];
        const tree = setupTree(treeDefinition);
        expect(treeToArray(tree)).toEqual(treeDefinition);
    });
    it('should return correct array for simple three node tree', () => {
        const treeDefinition = [2,3,4];
        const tree = setupTree(treeDefinition);

        expect(treeToArray(tree)).toEqual(treeDefinition);
    });
    it('should return correct array for complex tree definition', () => {
        const treeDefinition = [3,9,20,null,null,15,7];
        const tree = setupTree(treeDefinition);

        expect(treeToArray(tree)).toEqual(treeDefinition);
    });
});

describe('buildTree', () => {
    it('should return empty array for empty inorder array', () => {
        const tree = buildTree([], [3]);

        expect(treeToArray(tree)).toEqual([]);
    });
    it('should return empty array for empty postorder array', () => {
        const tree = buildTree([3], []);

        expect(treeToArray(tree)).toEqual([]);
    });
    it('should return expected tree array leetcode example', () => {
        const tree = buildTree([9,3,15,20,7], [9,15,7,20,3]);

        expect(treeToArray(tree)).toEqual([3,9,20,null,null,15,7]);
    });
    it('should return expected tree array for custom example', ()  => {
        const tree = buildTree([8,4,9,2,10,5,11,1,6,3,7], [8,9,4,10,11,5,2,6,7,3,1]);

        expect(treeToArray(tree)).toEqual([1,2,3,4,5,6,7,8,9,10,11]);
    })
});

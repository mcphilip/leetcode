const { deserialize, serialize, } = require('./serialize-deserialize');

describe('deserialize', () => {
    it('should return null for null input', () => {
        expect(deserialize(null)).toEqual(null);
    });
    it('should return null for undefined input', () => {
        expect(deserialize()).toEqual(null);
    });
    it('should return null for "[]" input', () => {
        expect(deserialize("[]")).toEqual(null);
    });
    it('should return correct tree for "[1,2,3] input', () => {
        const tree = deserialize("[1,2,3]");

        expect(tree.val).toEqual(1);
        expect(tree.left.val).toEqual(2);
        expect(tree.right.val).toEqual(3);
    });
    it('should return correct tree for leetcode example', () => {
       const tree = deserialize("[1,2,3,null,null,4,5]");

       expect(tree.val).toEqual(1);
       expect(tree.left.val).toEqual(2);
       expect(tree.right.val).toEqual(3);
       expect(tree.right.left.val).toEqual(4);
       expect(tree.right.right.val).toEqual(5);
    });
    it('should return correct tree for failed test case', () => {
        const tree = deserialize("[1,null,2,null,3,null,4]");

        expect(tree.val).toEqual(1);
        expect(tree.right.val).toEqual(2);
        expect(tree.right.right.val).toEqual(3);
        expect(tree.right.right.right.val).toEqual(4);
    });
    it('should return correct tree for failed test case #2', () => {
        const tree = deserialize('[4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]');

        expect(tree.val).toEqual(4);
        expect(tree.left.val).toEqual(-7);
        expect(tree.right.val).toEqual(-3);
        expect(tree.right.left.val).toEqual(-9);
        expect(tree.right.right.val).toEqual(-3);
        expect(tree.right.left.left.val).toEqual(9);
        expect(tree.right.left.right.val).toEqual(-7);
        expect(tree.right.right.left.val).toEqual(-4);
        expect(tree.right.left.left.left.val).toEqual(6);
        expect(tree.right.left.right.left.val).toEqual(-6);
        expect(tree.right.left.right.right.val).toEqual(-6);
        expect(tree.right.left.left.left.left.val).toEqual(0);
        expect(tree.right.left.left.left.right.val).toEqual(6);
        expect(tree.right.left.right.left.left.val).toEqual(5);
        expect(tree.right.left.right.right.left.val).toEqual(9);
        expect(tree.right.left.left.left.left.right.val).toEqual(-1);
        expect(tree.right.left.left.left.right.left.val).toEqual(-4);
        expect(tree.right.left.right.right.left.left.val).toEqual(-2);
    });
});

describe('serialize', () => {
    it('should return "[]" for null input', () => {
        expect(serialize(null)).toEqual('[]');
    })
    it('should return "[]" for undefined input', () => {
        expect(serialize()).toEqual('[]');
    })
    it('should return "[1]" for single node tree input', () => {
        const tree = deserialize("[1]");

        expect(serialize(tree)).toEqual("[1]");
    });
    it('should return "[1,null,2]" for two node tree input', () => {
        const tree = deserialize("[1,null,2]");

        expect(serialize(tree)).toEqual('[1,null,2]');
    });
    it('should return "[1,2,3,null,null,4,5]" for complex tree input', () => {
        const tree = deserialize("[1,2,3,null,null,4,5]");

        expect(serialize(tree)).toEqual("[1,2,3,null,null,4,5]");
    });
    it('should return "[1,null,2,null,3,null,4]" for failed test case input', () => {
        const tree = deserialize("[1,null,2,null,3,null,4]");

        expect(serialize(tree)).toEqual("[1,null,2,null,3,null,4]");
    });
    it('should return expected output for failed test case', () => {
        const input = "[4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]";
        const tree = deserialize(input);

        expect(serialize(tree)).toEqual(input);
    });
});

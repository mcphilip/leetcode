const {addBinary} = require('./07-add-binary-strings');

describe('addBinary', () => {
    it('should handle leetcode example #1', () => {
        expect(addBinary("11", "1")).toEqual("100");
    });
    it('should handle leetcode example #2', () => {
        expect(addBinary("1010", "1011")).toEqual("10101");
    });
    it('should handle a being "0"', () => {
        expect(addBinary("0", "101010101100101011")).toEqual("101010101100101011");
    });
    it('should handle a being "0"', () => {
        expect(addBinary("101010101100101011", "0")).toEqual("101010101100101011");
    });
});

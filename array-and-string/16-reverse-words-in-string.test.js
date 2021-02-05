const {getWords, reverseWords} = require('./16-reverse-words-in-string');

describe('getWords', () => {
    it('should handle example #1', () => {
        expect(getWords("the sky is blue")).toEqual(["the", "sky", "is", "blue"]);
    });
    it('should handle example #2', () => {
        expect(getWords("  hello world  ")).toEqual(["hello", "world"]);
    });
});

describe('reverseWords', () => {
    it('should handle example #1', () => {
        expect(reverseWords("the sky is blue")).toEqual("blue is sky the")
    });
    it('should handle example #2', () => {
        expect(reverseWords("  hello world  ")).toEqual("world hello");
    });
    it('should handle example #3', () => {
        expect(reverseWords("a good   example")).toEqual("example good a");
    });
    it('should handle example #4', () => {
        expect(reverseWords("  Bob    Loves  Alice   ")).toEqual("Alice Loves Bob");
    });
    it('should handle example #5', () => {
        expect(reverseWords("Alice does not even like bob")).toEqual("bob like even not does Alice");
    });
    it('should handle single word', () => {
        expect(reverseWords("Alice")).toEqual("Alice");
    });
});

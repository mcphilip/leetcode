const {reverseWords} = require('./17-reverse-words-in-string-2');

describe('reverseWords', () => {
    it('should handle example #1', () => {
        expect(reverseWords("Let's take LeetCode contest")).toEqual("s'teL ekat edoCteeL tsetnoc");
    });
    it('should handle example #2', () => {
        expect(reverseWords("Alice does not even like bob")).toEqual("ecilA seod ton neve ekil bob");
    });
    it('should handle single word', () => {
        expect(reverseWords("Alice")).toEqual("ecilA");
    });
    it('should handle empty string input', () => {
        expect(reverseWords("")).toEqual("");
    });
    it('should handle single character input', () => {
        expect(reverseWords("B")).toEqual("B");
    });
});

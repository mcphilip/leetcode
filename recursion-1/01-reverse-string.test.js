const {reverseString} = require('./01-reverse-string');

describe('reverseString', () => {
    it('should handle example #1', () => {
        const a = ["h","e","l","l","o"];

        reverseString(a);

        expect(a).toEqual(["o", "l", "l", "e", "h"]);
    });
    it('should handle example #2', () => {
        const a = ["H","a","n","n","a","h"];

        reverseString(a);

        expect(a).toEqual(["h","a","n","n","a","H"]);
    });
});

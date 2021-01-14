const {isIsomorphic} = require('./08-is-isomorphic');

describe('isIsomorphic', () => {
    it('should handle bad input', () => {
        expect(isIsomorphic(null, 'bar')).toEqual(false);
        expect(isIsomorphic('foo', null)).toEqual(false);
        expect(isIsomorphic(null, null)).toEqual(false);
        expect(isIsomorphic(undefined, 'bar')).toEqual(false);
        expect(isIsomorphic('foo')).toEqual(false);
        expect(isIsomorphic()).toEqual(false);
    });
    it('should return true for "Aa", "Bb"', () => {
        expect(isIsomorphic("Aa", "Bb")).toEqual(true);
    });
    it('should return false for "Aa", "bb"', () => {
        expect(isIsomorphic("Aa", "bb")).toEqual(false);
    });
    it('should return true for "aardvark", "bbseubsl"', () => {
        expect(isIsomorphic("aardvark", "bbseubsl")).toEqual(true);
    });
    it('should return true for "Aardvark", "Bbseubsl', () => {
        expect(isIsomorphic("Aardvark", "Bbseubsl")).toEqual(true);
    });
    it('should return false for "BB", "Aa"', () => {
        expect(isIsomorphic("BB", "Aa")).toEqual(false);
    });
    it('should return true for "010", "313"', () => {
        expect(isIsomorphic("010", "313")).toEqual(true);
    });
    it('should return false for "foo", "bar"', () => {
        expect(isIsomorphic("foo", "bar")).toEqual(false);
    });
    it('should return false for "bar", "foo"', () => {
        expect(isIsomorphic("bar", "foo")).toEqual(false);
    });
    it('should return true for "paper", "title"', () => {
        expect(isIsomorphic("paper", "title")).toEqual(true);
    });
    it('should return true for "title", "paper"', () => {
        expect(isIsomorphic("title", "paper")).toEqual(true);
    });    
});

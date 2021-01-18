const {groupStrings, buildKey} = require('./15-group-shifted-strings');

describe('buildKey', () => {
    it('should return "." for single character string', () => {
        expect(buildKey('a')).toEqual('.');
    });
    it('should return "1,1" for "abc"', () => {
        expect(buildKey('abc')).toEqual("1,1");
    });
    it('should return "1,1,1" for "zabc"', () => {
        expect(buildKey('zabc')).toEqual("1,1,1");
    });
    it('should return same keys for "abc", "fgh", and "xyz"', () => {
        expect(buildKey('abc')).toEqual(buildKey('fgh'));
        expect(buildKey('abc')).toEqual(buildKey('xyz'));
    });
    it('should return same keys for "ba", "dc", and "az', () => {
        expect(buildKey('ba')).toEqual(buildKey('dc'));
        expect(buildKey('ba')).toEqual(buildKey('az'));
    });
    it('should return same keys for "aza", "bab", "zyz', () => {
        expect(buildKey('aza')).toEqual(buildKey('bab'));
        expect(buildKey('aza')).toEqual(buildKey('zyz'));
    });
    it('should return same keys for "aaa", "bbb", "zzz', () => {
        expect(buildKey('aaa')).toEqual(buildKey('bbb'));
        expect(buildKey('aaa')).toEqual(buildKey('zzz'));
    });
    it('should return same keys for "ayc", "bzd", "cae', () => {
        expect(buildKey('ayc')).toEqual(buildKey('bzd'));
        expect(buildKey('ayc')).toEqual(buildKey('cae'));
    });
});

describe('groupStrings', () => {
    it('should handle edge cases', () => {
        expect(groupStrings(null)).toEqual([]);
        expect(groupStrings()).toEqual([]);
        expect(groupStrings([])).toEqual([]);
        expect(groupStrings(["foo"])).toEqual([["foo"]]);
    });
});

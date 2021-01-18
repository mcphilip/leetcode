const {groupAnagrams, sortString} = require('./14-group-anagrams');

describe('sortString', () => {
    it('should return abc for cab', () => {
        expect(sortString('cab')).toEqual('abc');
    });
    it('should return abc for abc', () => {
        expect(sortString('abc')).toEqual('abc');
    });
    it('shoudl return aaab for abaa', () => {
        expect(sortString('abaa')).toEqual('aaab');
    });
});

describe('groupAnagrams', () => {
    it('should handle bad input', () => {
        expect(groupAnagrams(null)).toEqual([]);
        expect(groupAnagrams()).toEqual([]);
        expect(groupAnagrams([])).toEqual([]);
    });
    it('shoulsd return [["a"]] for ["a"]', () => {
        const result = groupAnagrams(["a"]);

        expect(result.length).toEqual(1);
        expect(result[0]).toEqual(["a"]);
    });
    it('should return [[""]] for [""]', () => {
        const result = groupAnagrams([""]);

        expect(result.length).toEqual(1);
        expect(result[0]).toEqual([""]);
    });
    it('should return [["a"], [""]] for ["a", ""]', () => {
			const result = groupAnagrams(["a", ""]);

			expect(result.length).toEqual(2);
			expect(result.find(e => e[0] == "a")).toEqual(["a"]);
			expect(result.find(e => e[0] == "")).toEqual([""]);
		});
    it('should handle leetcode example #1', () => {
        const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);

        expect(result.length).toEqual(3);
        expect(result[0]).toEqual(["bat"]);
        expect(result[1]).toEqual(["tan", "nat"]);
        expect(result[2]).toEqual(["eat", "tea", "ate"]);
    });
});

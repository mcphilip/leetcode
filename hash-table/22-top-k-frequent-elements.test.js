const {topKFrequent} = require('./22-top-k-frequent-elements');

describe('topKFrequent', () => {
    it('should handle leetcode example #1', () => {
        const topK = topKFrequent([1,1,1,2,2,3], 2)

        expect(topK.length).toEqual(2);
        expect(topK.find(e => e === 1)).toEqual(1);
        expect(topK.find(e => e === 2)).toEqual(2);
    });
    it('should handle non repeating array', () => {
        const topK = topKFrequent([1,2,3,4,5,6], 6);

        expect(topK).toEqual([1,2,3,4,5,6]);
    });
    it('should handle single element array edge case', () => {
        expect(topKFrequent([1],1)).toEqual([1]);
    })
});

const {TwoSum} = require('./20-two-sum-data-structure');

describe('TwoSum', () => {
    it('should handle edge case for duplicated number', () => {
        const twoSum = new TwoSum();
        twoSum.add(1);
        twoSum.add(1);
        expect(twoSum.find(2)).toEqual(true);

        twoSum.add(-2);
        twoSum.add(-2);
        expect(twoSum.find(-4)).toEqual(true);
    });
    it('should not blow up trying to find 0', () => {
        const twoSum = new TwoSum();
        twoSum.add(1);
        twoSum.add(2);
        twoSum.add(3);
        expect(twoSum.find(0)).toEqual(false);
        
        twoSum.add(-3);
        expect(twoSum.find(0)).toEqual(true);
    });
    it('should handle leetcode example', () => {
        const twoSum = new TwoSum();
        twoSum.add(1);
        twoSum.add(3);
        twoSum.add(5);
        expect(twoSum.find(4)).toEqual(true);
        expect(twoSum.find(7)).toEqual(false);
    });
    it('should handle failed leetcode example', () => {
        const twoSum = new TwoSum();
        twoSum.add(0);
        twoSum.add(0);
        expect(twoSum.find(0)).toEqual(true);
    });
    it('should handle failed leetcode example #2', () => {
        const twoSum = new TwoSum();
        twoSum.add(0);
        twoSum.add(0);
        expect(twoSum.find(0)).toEqual(true);
    });
    it('should handle failed leetcode example #3', () => {
        const twoSum = new TwoSum();
        twoSum.add(3);
        twoSum.add(2);
        twoSum.add(1);
        expect(twoSum.find(2)).toEqual(false);
        expect(twoSum.find(3)).toEqual(true);
        expect(twoSum.find(4)).toEqual(true);
        expect(twoSum.find(5)).toEqual(true);
        expect(twoSum.find(6)).toEqual(false);
    });
});

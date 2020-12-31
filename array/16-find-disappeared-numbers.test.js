const {findDisappearedNumbers} = require('./16-find-disappeared-numbers');

describe('findDisappearedNumbers', () => {
    it('should return [] for null input', () => {
        expect(findDisappearedNumbers(null)).toEqual([]);
    });
    it('should return [] for undefined input', () => {
        expect(findDisappearedNumbers()).toEqual([]);
    });
    it('should return [] for [] input', () => {
        expect(findDisappearedNumbers([])).toEqual([]);
    });
    it('should return [] for [1] input', () => {
        expect(findDisappearedNumbers([1])).toEqual([]);
    })
    it('should return [] for [1,2,3,4] input', () => {
        expect(findDisappearedNumbers([1,2,3,4])).toEqual([]);
    });
    it('should return [5,6] for [4,3,2,7,8,2,3,1] input', () => {
        expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6]);
    });
    it('should return [2] for [1,1] -- failed test case', () => {
        expect(findDisappearedNumbers([1,1])).toEqual([2]);
    });
    it('should return [1] for [2,2] -- falied test case', () => {
        expect(findDisappearedNumbers([2,2])).toEqual([1]);
    });
    it('should return [1,2,8] for [5,4,6,7,9,3,10,9,5,6] -- failed test case', () => {
        expect(findDisappearedNumbers([5,4,6,7,9,3,10,9,5,6])).toEqual([1,2,8]);
    });
});

const {heightChecker} = require('./13-height-checker');

describe('heightChecker', () => {
    it('should return 0 for null input', () => {
        expect(heightChecker(null)).toEqual(0);
    });
    it('should return 0 for undefined input', () => {
        expect(heightChecker()).toEqual(0);
    });
    it('should return 0 for input array length less than 2', () => {
        expect(heightChecker([1])).toEqual(0);
    });
    it('should return 0 for sorted array', () => {
        expect(heightChecker([1,2,2,3,4,5,5])).toEqual(0);
    });
    it('should return 5 for [5,1,2,3,4]', () => {
        expect(heightChecker([5,1,2,3,4])).toEqual(5);
    });
    it('should return 3 for [1,1,4,2,1,3]', () => {
        expect(heightChecker([1,1,4,2,1,3])).toEqual(3);
    });
    it('should return 22 for failed test case', () => {
        const a = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];
        expect(heightChecker(a)).toEqual(22);
    });
});

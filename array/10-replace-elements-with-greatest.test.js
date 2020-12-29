const {findIndexOfGreatest, replaceElements} = require('./10-replace-elements-with-greatest');

describe('findIndexOfGreatest', () => {
    it('should return 1 from [3,10,5], 0 input', () => {
        expect(findIndexOfGreatest([3,10,5], 0)).toEqual(1);
    });
    it('should return 0 from [4], 0 input', () => {
        expect(findIndexOfGreatest([4], 0)).toEqual(0);
    });
    it('should return 0 from [10,9,8], 0 input', () => {
        expect(findIndexOfGreatest([10,9,8], 0)).toEqual(0);
    });
    it('should return 1 from [10,9,8], 1 input', () => {
        expect(findIndexOfGreatest([10,9,8], 1)).toEqual(1);
    });
});
describe('replaceElements', () => {
    it('should return [] for null input', () => {
        expect(replaceElements(null)).toEqual([]);
    });
    it('should return [] for undefined input', () => {
        expect(replaceElements()).toEqual([]);
    });
    it('should return [] for [] input', () => {
        const arr = [];
        expect(replaceElements(arr)).toEqual([]);
        expect(arr).toEqual([]);        
    });
    it('should return [-1] for [1] input', () => {
        const arr = [1];
        expect(replaceElements(arr)).toEqual([-1]);
        expect(arr).toEqual([-1]);
    });
    it('should return [x,-1] for [y,x]', () => {
        const arr = [10,2];
        expect(replaceElements(arr)).toEqual([2,-1]);
        expect(arr).toEqual([2,-1]);
    });
    it('should return [18,6,6,6,1,-1] for [17,18,5,4,6,1]', () => {
        const arr = [17,18,5,4,6,1];
        expect(replaceElements(arr)).toEqual([18,6,6,6,1,-1]);
        expect(arr).toEqual([18,6,6,6,1,-1]);
    });
    it('should return [6,6,6,-1] for [1,2,3,6]', () => {
        const arr = [1,2,3,6];
        expect(replaceElements(arr)).toEqual([6,6,6,-1]);
        expect(arr).toEqual([6,6,6,-1]);
    });
});

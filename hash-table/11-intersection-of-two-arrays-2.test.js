const {intersect} = require('./11-intersection-of-two-arrays-2');

describe('intersect', () => {
    it('should handle bad input', () => {
        expect(intersect(null, [2])).toEqual([]);
        expect(intersect([2], null)).toEqual([]);
        expect(intersect(null, null)).toEqual([]);
        expect(intersect(undefined, [2])).toEqual([]);
        expect(intersect([2])).toEqual([]);
        expect(intersect()).toEqual([]);
    });
    it('should return [2,2] for [1,2,2,1], [2,2]', () => {
        const i = intersect([1,2,2,1], [2,2]);
        expect(i).toEqual([2,2]);
    });
    it('should reutrn [4,9] for [4,9,5], [9,4,9,8,4]', () => {
        const i = intersect([4,9,5], [9,4,9,8,4]);
        expect(i.length).toEqual(2);
        expect(i.find(e => e === 4)).toEqual(4);
        expect(i.find(e => e === 9)).toEqual(9);
    });
});

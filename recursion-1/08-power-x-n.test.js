const {myPow} = require('./08-power-x-n');

describe('myPow', () => {
    it('example #1', () => {
        expect(myPow(2.00000, 10)).toEqual(1024.00000);
    });
    it('example #2', () => {
        expect(myPow(2.10000,3).toPrecision(5)).toEqual(9.26100.toPrecision(5));
    });
    it('example #3', () => {
        expect(myPow(2.00000,-2).toPrecision(5)).toEqual(0.25000.toPrecision(5));
    });
    it('should handle integer, n positive', () => {
        expect(myPow(2, 10).toPrecision(5)).toEqual(1024.0.toPrecision(5));
    });
    it('should handle integer, n negative', () => {
        expect(myPow(2, -2).toPrecision(5)).toEqual(0.25000.toPrecision(5));
    });
    it('should handle n=0', () => {
        expect(myPow(2.00, 0)).toEqual(1);
    });
});

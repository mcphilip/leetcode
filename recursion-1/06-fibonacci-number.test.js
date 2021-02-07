
const {fib} = require('./06-fibonacci-number');

describe('fib', () => {
    it('should handle 0', () => {
        expect(fib(0)).toEqual(0);
    });
    it('should handle 1', () => {
        expect(fib(1)).toEqual(1);
    });
    it('should handle 2', () => {
        expect(fib(2)).toEqual(1);
    });
    it('should handle 3', () => {
        expect(fib(3)).toEqual(2);
    });
    it('should handle 11', () => {
        expect(fib(11)).toEqual(89);
    });
});

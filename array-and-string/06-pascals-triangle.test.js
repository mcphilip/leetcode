const {generate} = require('./06-pascals-triangle');

describe('generate', () => {
   it('should handle 1', () => {
        expect(generate(1)).toEqual([[1]]);
    });
   it('should handle 2', () => {
        expect(generate(2)).toEqual([[1],[1,1]]);
    });
   it('should handle 3', () => {
        expect(generate(3)).toEqual([[1],[1,1],[1,2,1]]);
    });
   it('should handle 5', () => {
        expect(generate(5)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
    });
   it('should handle 6', () => {
        expect(generate(6)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1]]);
    });
});

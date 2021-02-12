const {kthGrammar} = require('./09-kth-symbol');

describe('kthGrammar', () => {
    it('should handle examples', () => {
        expect(kthGrammar(1,1)).toEqual(0);
        expect(kthGrammar(2,1)).toEqual(0);
        expect(kthGrammar(2,2)).toEqual(1);
        expect(kthGrammar(4,5)).toEqual(1);
    });
    it('should handle failed test case', () => {
        expect(kthGrammar(30, 434991989)).toEqual(1);
    });
});

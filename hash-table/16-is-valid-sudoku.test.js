const {buildKey, isValidSudoku} = require('./16-is-valid-sudoku');

describe('buildKey', () => {
    it('should return  for 0,0', () => {
        expect(buildKey(0,0)).toEqual(0);
    });
    it('should reutrn 0 for 2,2', () => {
        expect(buildKey(2,2)).toEqual(0);
    });
    it('should return 8 for 8,8', () => {
        expect(buildKey(8,8)).toEqual(8);
    });
    it('should reutrn 4 for 4,4', () => {
        expect(buildKey(4,4)).toEqual(4);
    });
});

describe('isValidSudoku', () => {
    it('should handle bad input', () => {
        expect(isValidSudoku(null)).toEqual(false);
        expect(isValidSudoku([[],[]])).toEqual(false);
        expect(isValidSudoku()).toEqual(false);
    });
    it('should return true for leetcode example #1', () => {
        const board = 
        [["5","3","1",".","7",".",".",".","."]
        ,["6","2","7","1","9","5",".",".","."]
        ,["9","4","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]];

        expect(isValidSudoku(board)).toEqual(true);
    });
    it('should return false for leetcode example #2', () => {
        const board = 
        [["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]];

        expect(isValidSudoku(board)).toEqual(false);
    });
});

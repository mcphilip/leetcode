/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits.length === 1) {
        return digits[0] === 9 ? [1,0] : [digits[0] + 1];
    }

    const recurse = function(idx) {
        if (idx < digits.length-1) {
            let carry = recurse(idx+1);
            if (carry === 1) {
                if (digits[idx] === 9) {
                    digits[idx] = 0;
                    return 1;
                }
                else {
                    digits[idx] += 1;
                    return 0;
                }
            }
        }
        else {
            if (digits[idx] === 9) {
                digits[idx] = 0;
                return 1;
            }
            else {
                digits[idx] += 1;
                return 0;
            }
        }
    };

    let carry = recurse(0);

    if (carry === 1) return [1,...digits];

    return digits;
};

module.exports = {plusOne};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (!s) return '';

    const words = s.split(' ');

    let result = '';
    let word = '';
    
    for (let i = 0; i < words.length; i++) {
        word = words[i];

        for (let j = word.length - 1; j >= 0; j--) {
            result += word[j];
        }

        if (i !== words.length - 1) result += ' ';
    }
    
    return result;
};

module.exports = {reverseWords};

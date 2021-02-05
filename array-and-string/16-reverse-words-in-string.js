/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = getWords(s);

    let result = '';

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            result += words[i];
            if (i !== 0) {
                result += " ";
            }
        }
    }

    return result;
};

const getWords = function(s) {
    return s.trim().split(' ');
}

module.exports = {getWords, reverseWords};

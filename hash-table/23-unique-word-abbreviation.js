/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.map = new Map();
    let word;
    let a, b, c;

    for (let i = 0; i < dictionary.length; i++) {
        word = dictionary[i];
        a = this.map.get(word[0]);
        a = a || new Map();
        b = a.get(word[word.length-1]);
        b = b || new Map();
        c = b.get(word.length-2);
        c = c || [];
        c.push(word);
        b.set(word.length-2, c);
        a.set(word[word.length-1], b);
        this.map.set(word[0], a);
    }

    //console.log(`this.map: ${[...this.map.entries()]}`);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    let a,b,c;

    a = this.map.get(word[0]);
    if (!a) return true;
    //console.log(`a: ${[...a.entries()]}`);
    b = a.get(word[word.length-1]);
    if (!b) return true;
    //console.log(`b: ${[...b.entries()]}`);
    c = b.get(word.length-2);
    if (!c) return true;
    //console.log(`c: ${[...c.entries()]}`);

    for (let i = 0; i < c.length; i++) {
        if (c[i] !== word) {
            return false;
        }
    }

    return true;
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */

 module.exports = {ValidWordAbbr};

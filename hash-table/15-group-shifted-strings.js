/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    if (!strings || strings.length === 0) return [];
    if (strings.length === 1) return [strings];

    const result = [];
    const map = new Map();
    let k;
    let v;

    for (let i = 0; i < strings.length; i++) {
        k = buildKey(strings[i]);
        v = map.get(k);

        if (!v) {
            v = [];
            map.set(k, v);
        }

        v.push(strings[i]);
    }

    let vals = map.values();
    let val = vals.next().value;

    while(val) {
        result.push(val);
        val = vals.next().value;
    }

    return result;
};

const buildKey = function(s) {
    if (s.length === 1) return ".";

    let k = [];
    let v;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === "a" && s[i-1] === "z") {
            k.push("1");
        }
        else if (s[i] === "z" && s[i-1] === "a") {
            k.push("25");
        }
        else {
            v = s[i].charCodeAt(0) - s[i-1].charCodeAt(0);
            v = v < 0 ? v + 26 : v;
            k.push(v);
        }
    }

    console.log(`s: ${s}, k: ${k}`);

    return k.join(',');
};

module.exports = {buildKey, groupStrings};

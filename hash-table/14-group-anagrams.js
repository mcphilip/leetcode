/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs || strs.length === 0) return [];
    if (strs.length === 1) return [strs];

    const result = [];
    const map = new Map();
    let k = null;

    for (let i = 0; i < strs.length; i++) {
        k = strs[i].length < 2 ? strs[i] : sortString(strs[i]);

        if (!map.has(k)) map.set(k, []);

        map.get(k).push(strs[i]);
    }

    let entries = map.values();
    let val = entries.next().value;

    while (val) {
        result.push(val);
        val = entries.next().value;
    }


    console.log(`result: ${JSON.stringify(result)}`);

    result.sort((a,b) => a.length - b.length);

    return result;
};

const sortString = function(str) {
    return str.split('').sort().join('');
}

module.exports = {groupAnagrams, sortString};

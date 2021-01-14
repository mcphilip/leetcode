/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // handle edge cases: bad input, length 1 strings
    if (!s || !t) return false;
    if (s.length === 1 && t.length === 1) return true;

    let mapTtoS = new Map();
    mapTtoS.set(t[0], s[0]);
    let mapStoT = new Map();
    mapStoT.set(s[0], t[0]);

    let mapTtoSVal = null;
    let mapStoTVal = null;

    for (let i = 1; i < s.length; i++) {
        mapTtoSVal = mapTtoS.get(t[i]);
        mapStoTVal = mapStoT.get(s[i]);
        console.log(`mapTtoSVal: ${mapTtoSVal}, mapStoTVal: ${mapStoTVal}, s[i]: ${s[i]}, t[i]: ${t[i]}`);
        if (mapTtoSVal !== null && mapTtoSVal !== undefined) {
            if (mapTtoSVal !== s[i] || mapStoTVal !== t[i]) return false;
        }
        else {
            if (mapStoTVal !== null && mapStoTVal !== undefined) return false;

            mapTtoS.set(t[i], s[i]);
            mapStoT.set(s[i], t[i]);
        }
    }

    return true;
};

module.exports = {isIsomorphic};

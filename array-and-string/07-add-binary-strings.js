/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a === "0") return b;
    if (b === "0") return a;

    const add = function(shorter, longer) {
        let result = "";
        let carry = false;
        let idxS = shorter.length-1;
        let idxL = longer.length-1;

        for (;idxS >= 0; idxS--,idxL--) {
            // console.log(`result: ${result}, carry: ${carry}, shorter[idxS]: ${shorter[idxS]}, longer[idxL]: ${longer[idxL]}`);
            if (carry) {
                if (shorter[idxS] === "0" && longer[idxL] === "0") {
                    result = "1" + result;
                    carry = false;
                }
                else if (shorter[idxS] === "1" && longer[idxL] === "1") {
                    result = "1" + result;
                    carray = true;
                }
                else {
                    result = "0" + result;
                    carry = true;
                }
            }
            else {
                if (shorter[idxS] === "0" && longer[idxL] === "0") {
                    result = "0" + result;
                    carry = false;
                }
                else if (shorter[idxS] === "1" && longer[idxL] === "1") {
                    result = "0" + result;
                    carry = true;
                }
                else {
                    result = "1" + result;
                    carry = false;
                }
            }
        }

        while (idxL >= 0) {
            // console.log(`result: ${result}, carry: ${carry}, longer[idxL]: ${longer[idxL]}`);
            if (carry) {
                if (longer[idxL] === "0") {
                    result = "1" + result;
                    carry = false;
                }
                else {
                    result = "0" + result;
                    carry = true;
                }
            }
            else {
                result = longer[idxL] + result;
            }
            idxL--;
        }

        return carry ? "1" + result : result;
    }

    const result = a.length >= b.length ? add(b, a) : add(a, b);

    return result;
};

module.exports = {addBinary};

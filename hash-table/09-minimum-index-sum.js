/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    if (list1.length === 1 && list2.length === 1) return list1;
    if (list1.length === 1) return list1;
    if (list2.length === 1) return list2;

    const map1 = new Map();
    for (let i = 0; i < list1.length; i++) map1.set(list1[i], i);

    const map2 = new Map();
    for (let j = 0; j < list2.length; j++) map2.set(list2[j], j);

    const minimumIndexSum = function(m1, m2) {
        let r = [];
        let minSum = 2002;
        let i1;
        const keys2Iterator = m2.keys();
        let k2 = keys2Iterator.next().value;

        while (k2) {
            i1 = m1.get(k2);

            console.log(`k2: ${k2}, i1: ${i1}`);

            if (i1 !== undefined) {
                i2 = m2.get(k2);
                if (i2 + i1 < minSum) {
                    r = [k2];
                    minSum = i2 + i1;
                }
                else if (i2 + i1 === minSum) {
                    r.push(k2);
                }
            }

            k2 = keys2Iterator.next().value;
        }

        return r;
    };

    const result = list1.length <= list2.length ? minimumIndexSum(map1, map2) : minimumIndexSum(map2, map1);

    return result;
};

module.exports = {findRestaurant};

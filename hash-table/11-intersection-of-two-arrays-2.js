/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (!nums1 || !nums2 || nums1.length === 0 || nums2.length === 0) return [];

    const doIntersect = function(n1, n2) {
        const map = new Map();
        let r = [];

        for (let i = 0; i < n1.length; i++) {
            if (map.has(n1[i])) map.set(n1[i], map.get(n1[i]) + 1);
            else map.set(n1[i], 1);
        }

        // console.log(`map: ${[...map.entries()]}`);

        for (let j = 0; j < n2.length; j++) {
            if (map.get(n2[j]) > 0) {
                r.push(n2[j]);
                map.set(n2[j], map.get(n2[j]) - 1);
            }
        }

        return r;
    };

    let result = nums1.length < nums2.length ? doIntersect(nums1, nums2) : doIntersect(nums2, nums1);

    // console.log(`result: ${result}`);

    return result;
};

module.exports = {intersect};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // handle three edge cases:
    if (nums1.length == 0)  return;
    if (n == 0) return;
    if (m == 0) {
        for (let i = 0; i < nums2.length; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }

    let nums2Index = 0;
    let nums1Index = 0;
    let uninitializedStartIndex = m;
    while (nums2Index < nums2.length) {        
        // let logStr = `nums1Index: ${nums1Index}, nums2Index: ${nums2Index}, nums1[nums1Index]: ${nums1[nums1Index]}, nums2[nums2Index]: ${nums2[nums2Index]}\n`;
        // logStr += `nums1: ${nums1}, nums2: ${nums2}, uninitializedStartIndex: ${uninitializedStartIndex}`;
        // console.log(logStr);

        // edge case, all remaining nums2 elements are greater than initialized nums1 elements
        if (nums1Index >= uninitializedStartIndex) {
            nums1[nums1Index] = nums2[nums2Index];
            nums1Index++;
            nums2Index++;
            continue;
        }

        if (nums1[nums1Index] > nums2[nums2Index]) {

            for (let j = uninitializedStartIndex; j > nums1Index; j--) {
                nums1[j] = nums1[j-1];
            }

            nums1[nums1Index] = nums2[nums2Index];

            uninitializedStartIndex++;
            nums2Index++;
        }

        nums1Index++;
    }
};

module.exports = {
    merge
}

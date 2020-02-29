/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let mixLength = m + n;

    while(mixLength > 0) {
        if (n === 0) {
            break;
        }

        if (m === 0) {
            while (n > 0) {
                nums1[--mixLength] = nums2[--n];
            }
            break;
        }

        if (nums1[m - 1] >= nums2[n - 1]) {
            nums1[--mixLength] = nums1[--m];
        } else {
            nums1[--mixLength] = nums2[--n];
        }
    }
};
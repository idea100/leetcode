// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;

    for (i = 0, j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[i + 1] = nums[j]
            i++
        }
    }

    nums.length = i + 1;
    return nums.length;
};
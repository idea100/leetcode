/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    function swap(nums, i, j) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

    function findNumsArray(nums, level) {
        if (level === nums.length) {
            result.push([...nums]);
        }

        for (let i = level; i < nums.length; i++) {
            swap(nums, level, i);
            findNumsArray(nums, level + 1);
            swap(nums, level, i);
        }
    }
    findNumsArray(nums, 0);

    return result;
};
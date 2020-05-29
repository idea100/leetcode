/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function bSearch(nums, target, left, right) {
        if (left > right) {
            return -1;
        }
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] > target) {
            return bSearch(nums, target, left, mid -1);
        } else {
            return bSearch(nums, target, mid + 1, right)
        }
    }

    const position = bSearch(nums, target, 0, nums.length - 1);

    if (position === -1) {
        return [-1, -1];
    }

    let left = position;
    let right = position;
    let tmpLeft = left;
    let tmpRight = right;

    while (tmpLeft !== -1) {
        tmpLeft = bSearch(nums, target, 0, left - 1);
        if (tmpLeft !== -1) {
            left = tmpLeft;
        }
    }

    while (tmpRight !== -1) {
        tmpRight = bSearch(nums, target, tmpRight + 1, nums.length - 1);
        if (tmpRight !== -1) {
            right = tmpRight;
        }
    }

    return [left, right]
};
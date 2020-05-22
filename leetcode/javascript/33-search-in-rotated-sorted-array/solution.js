/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function xSearch(array, target, left, right) {
        if (left > right) {
            return -1;
        }

        const mid = Math.floor((left + right) / 2);

        if (target === array[mid]) {
            return mid;
        }

        if (target === array[left]) {
            return left;
        }

        if (target === array[right]) {
            return right;
        }

        if (array[left] < array[mid]) {
            if (array[left] < target && target < array[mid]) {
                return xSearch(array, target, left, mid - 1)
            } else {
                return xSearch(array, target, mid + 1, right)
            }

        } else {
            if (array[mid] < target && target < array[right]) {
                return xSearch(array, target, mid + 1, right)
            } else {
                return xSearch(array, target, left, mid - 1)
            }
        }
    }

    return xSearch(nums, target, 0, nums.length - 1)
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length <= 1) {
        return;
    }
    let i, j;
    for (i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            for (j = i + 1; j < nums.length; j++) {
                if (nums[i] >= nums[j]) {
                    const tmp = nums[i];
                    nums[i] = nums[j - 1];
                    nums[j - 1] = tmp;
                    break;
                }
            }

            if (j === nums.length) {
                const tmp = nums[i];
                nums[i] = nums[j - 1];
                nums[j - 1] = tmp;
            }

            let left = i + 1;
            let right = nums.length - 1;
            while(left < right) {
                const tmpNum = nums[left];
                nums[left++] = nums[right];
                nums[right--] = tmpNum;
            }
            break;
        }
    }

    if (i < 0) {
        let left = 0;
        let right = nums.length - 1;
        while(left < right) {
            const tmpNum = nums[left];
            nums[left++] = nums[right];
            nums[right--] = tmpNum;
        }
    }
};
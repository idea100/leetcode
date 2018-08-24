// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    const sums = (i, j, k) => nums[i] + nums[j] + nums[k];

    let result = nums[0] + nums[1] + nums[2];

    for(let i = 0; i< nums.length -2;) {
        let j = i + 1;
        let k = nums.length - 1;

        while(j < k) {
            const theSum = sums(i, j, k);

            if (Math.abs(theSum - target) < Math.abs(result - target)) {
                result = theSum;
            }

            if (theSum === target) {
                return target;
            }

            if (theSum < target) {
                ++j;
            }

            if (theSum > target) {
                --k;
            }
        }

        ++i;



    }

    return result;
};

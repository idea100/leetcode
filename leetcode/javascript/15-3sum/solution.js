// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
//
// 注意：答案中不可以包含重复的三元组。



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a,b) => a-b);

    // const sums = (...args) => args.reduce((pre, i) => pre + nums[i], 0);
    const sums = (i, j, k) => nums[i] + nums[j] + nums[k];

    for(let i = 0; i< nums.length -2;) {
        let j = i + 1;
        let k = nums.length - 1;

        while(j < k) {
            if (sums(i, j, k) === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                ++j;
                --k;

                // 去重
                while(nums[j] === nums[j-1] && j < k){
                    ++j;
                }

                // 去重
                while(nums[k] == nums[k+1] && j < k){
                    --k;
                }

            }

            if (sums(i, j, k) < 0) {
                ++j;
                // 去重
                while(nums[j] === nums[j-1] && j < k){
                    ++j;
                }
            }

            if (sums(i, j, k) > 0) {
                --k;
                // 去重
                while(nums[k] === nums[k+1] && j < k){
                    --k;
                }
            }
        }

        ++i;

        // 去重
        while(nums[i] === nums[i-1] && i < nums.length - 2){
            ++i;
        }

    }

    return result;

};

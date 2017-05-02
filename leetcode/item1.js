/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {}
    for (var i = 0, length = nums.length; i < length; i++) {
        var num = nums[i]
        if (map[num] !== undefined) {
            return [map[target-num], i]
        }
        map[num] = i
        map[target - num] = true
    }
    return []
};
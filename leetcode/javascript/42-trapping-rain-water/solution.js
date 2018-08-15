/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let maxLeft = 0, maxRight = 0, left = 0, right = height.length - 1;
  let result = 0;

  while(left < right) {
    maxLeft = Math.max(maxLeft, height[left]);
    maxRight = Math.max(maxRight, height[right]);

    if (height[left] < height[right]) {
      result += maxLeft - height[left];
      ++left;
    } else {
      result += maxRight - height[right];
      --right;
    }
  }

  return result;
};

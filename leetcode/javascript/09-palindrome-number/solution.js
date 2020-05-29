/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    if (x === 0) {
        return true;
    }
    let arr = [];

    while(x > 0) {
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }

    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if (arr[left++] !== arr[right--]) {
            return false;
        }
    }

    return true;
};
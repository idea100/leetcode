/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }

    let x = 0, m = n;
    while (m > 0) {
        if (m === 1) break;

        m = m >> 1;
        ++x;
    }

    return n === m << x;
};
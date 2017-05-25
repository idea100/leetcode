// Reverse digits of an integer.
//
// Example1: x = 123, return 321
// Example2: x = -123, return -321


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    while (x !== 0) {
        var a = x % 10;
        result = result * 10 + a
        x = parseInt(x / 10)
    }

    return result
};

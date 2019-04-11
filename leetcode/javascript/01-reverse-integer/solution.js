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

    // 由于JavaScript使用的是大数,正常情况下应该是这样判断的
    // if (result != (result * 10) / 10 ) {
    //   return 0;
    // }

    if (result < -2147483648 || result > 2147483647) {
      return 0;
    }

    return result
};

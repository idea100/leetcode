/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const array = {};
    function findResult(a, b) {
        if(a === b) {
            return 1
        }

        if (a > b) {
            return 0;
        }

        if (array[a]) {
            return array[a].value;
        }
        array[a] = { value: findResult(a + 1, b) + findResult(a + 2, b) };
        return array[a].value;
    }

    return findResult(1, n) + findResult(2, n);
};
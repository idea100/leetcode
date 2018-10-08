/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numArray = digits.split('');
    const dict = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const result = [];

    if (digits === '') {
        return [];
    }

    function backTracking(val, level, charArray) {
        const str = charArray[level];
        if(!str) {
          result.push(val);
          return;
        }

        for(let i = 0; i < str.length; i++) {
            const value = val + str.charAt(i);
            backTracking(value, level + 1, charArray);
        }
    }

    const charArray = numArray.map(item => dict[item - 2]);

    backTracking('', 0, charArray);

    return result;
};

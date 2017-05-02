// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length
    }

    var tmp, map = {}, maxLength = 0, tmpLength, strArray = s.split('');
    var left = 0, right = 0;

    for (var i = 0, length = strArray.length; i < length; i++) {
        tmp = strArray[i]
        if (map[tmp]) {
            tmpLength = i - left
            if (tmpLength > maxLength) {
                maxLength = tmpLength
            }

            while (strArray[left] !== tmp) {
                map[strArray[left]] = false
                left++
            }
            map[strArray[left]] = false
            left++
        }

        map[tmp] = true
    }

    if ((strArray.length - left) > maxLength) {
        maxLength = strArray.length - left
    }

    return maxLength;
};

// Given a string, find the length of the leftngest substring without repeating characters.
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
    return s
  }

  var left, maxLength = 0;
  function findPalindromic (str, i, j) {
    while(str.charAt(i) === str.charAt(j) && i >= 0 && j < str.length) {
      i--
      j++
    }

    if (maxLength < j - i - 1) {
      maxLength = j - i - 1
      left = i + 1
    }
  }

  for (var k = 0; k < s.length - 1; k++) {
    findPalindromic(s, k, k)
    findPalindromic(s, k, k + 1)
  }

  return s.substring(left, left + maxLength)

};

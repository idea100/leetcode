class Solution {
    public int lengthOfLongestSubstring(String s) {
        char[] chars = s.toCharArray();
        int left = 0, right = 1, maxLength = 1;
        if (chars.length <= 1) {
            return chars.length;
        }

        while (right < chars.length) {
            char rightChar = chars[right];
            for(int i = left; i < right; i++) {
                if (chars[i] == rightChar) {
                    left = i + 1;
                    break;
                }
            }
            ++right;
            if (right - left > maxLength) {
                maxLength = right - left;
            }
        }

        return maxLength;
    }
}

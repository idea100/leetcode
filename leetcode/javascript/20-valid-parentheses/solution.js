// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(': -1,
        '[': -2,
        '{': -3,
        ')': 1,
        ']': 2,
        '}': 3
    };

    let array = [];

    for(let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (array.length === 0 ||
            map[char] + map[array[array.length - 1]] !== 0
        ) {
            array.push(char);
        } else {
            array.pop();
        }
    }

    return array.length === 0;
};

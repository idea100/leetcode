// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
//
// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }

    let nextRun, i = 0, arr = [], result = ''

    for (let row = 0; row < numRows; row++) {
        arr[row] = ''
    }

    function addChar (subStr) {
        arr[i] += subStr

        if (i === 0) {
            nextRun = '+'
        }

        if ( i === numRows - 1) {
            nextRun = '-'
        }

        nextRun === '+' ? i++ : i--
    }

    for (let m = 0; m < s.length; m++) {
        addChar(s.charAt(m))
    }

    for (let row = 0; row < numRows; row++) {
        result += arr[row]
    }

    return result

};

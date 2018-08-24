/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const array = [{
    name: 'M',
    value: 1000
  }, {
    name: 'D',
    value: 500
  }, {
    name: 'C',
    value: 100
  }, {
    name: 'L',
    value: 50
  }, {
    name: 'X',
    value: 10
  }, {
    name: 'V',
    value: 5
  }, {
    name: 'I',
    value: 1
  }];

  let result = '';

  array.forEach(item => {
    result += new Array(parseInt(num / item.value) + 1).join(item.name);
    num = num % item.value;
  })

  return result;
};

// define function mul then
// mul(2)          // return 2
// mul(2)(3)       // return 6
// mul(2)(3)(4)    // return 24


/**
 * @param {number} value
 * @return {number}
 */
function mul(value) {

  var func = function (newValue) {
    return mul(newValue * value)
  }

  func.toString = function () {
    return value
  }

  return func
}

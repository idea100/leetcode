/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((a, b) => a + b);

  if (sum % 3 !== 0 || A.length < 3) {
    return false;
  }

  let i, j, leftSum = A[0], rightSum = A[A.length - 1], val = sum / 3;

  for(i = 1; i < A.length && leftSum !== val; i++) {
    leftSum += A[i];
  }

  i--

  for (j = A.length - 2; j > 0 && rightSum !== val; j--) {
    rightSum += A[j];
  }

  j++

  return leftSum === val && rightSum === val && i + 1 < j;
};

/**
 * Problems
 * 1317. Convert Integer to the Sum of Two No-Zero Integers
 * https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
 * @param {number} n
 * @returns {number[]}
 * Runtime: 80 ms (faster than 57.89 %)
 * Memory Usage: 39.1 MB (less than 43.42 %)
 */

const getNoZeroIntegers = n => {
    let postNumber = n-1;
    let preNumber = 1;

    while (true) {
        if (preNumber.toString().indexOf("0") >= 0 || postNumber.toString().indexOf("0") >= 0) {
            postNumber--;
            preNumber++;
        } else break;
    }

    return [preNumber, postNumber];
}
/**
 * Problems
 * 326. Power of Three
 * https://leetcode.com/problems/power-of-three/
 * @param {number} n
 * @returns {boolean}
 * Runtime: 236 ms (faster than 50.32 %)
 * Memory Usage: 48.8 MB (less than 71.92 %)
 */

const isPowerOfThree = n => {
    if (n < 0) return false;
    return (Math.log(n)/Math.log(3)).toFixed(9) === parseInt(Math.log(n)/Math.log(3)).toFixed(9) ? true : false;
}
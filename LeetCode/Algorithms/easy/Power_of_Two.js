/**
 * Problems
 * 231. Power of Two
 * https://leetcode.com/problems/power-of-two/
 * @param {number} n
 * @returns {boolean}
 * Runtime: 88 ms (faster than 77.30 %)
 * Memory Usage: 40.4 MB (less than 20.30 %)
 */

const isPowerOfTwo = n => {
    return Math.log2(n) === parseInt(Math.log2(n)) ? true : false;
}
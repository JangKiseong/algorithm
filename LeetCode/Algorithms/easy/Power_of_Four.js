/**
 * Problems
 * 342. Power of Four
 * https://leetcode.com/problems/power-of-four/
 * @param {number} n
 * @returns {boolean}
 * Runtime: 88 ms (faster than 72.09 %)
 * Memory Usage: 40.4 MB (less than 19.90 %)
 */

const isPowerOfFour = n => {
    return Math.log(n)/Math.log(4) === parseInt(Math.log(n)/Math.log(4)) ? true : false;
}
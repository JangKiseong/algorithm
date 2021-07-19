/**
 * Problems
 * 191. Number of 1 Bits
 * https://leetcode.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @returns {number}
 * Runtime: 88 ms (faster than 55.58 %)
 * Memory Usage: 40.5 MB (less than 11.81 %)
 */

const hammingWeight = n => {
    return n.toString(2).replace(/0/g,"").length;
}
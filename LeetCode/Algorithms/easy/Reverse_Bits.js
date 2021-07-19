/**
 * Problems
 * 190. Reverse Bits
 * https://leetcode.com/problems/reverse-bits/
 * @param {number} n - a positive integer
 * @returns {number} - a positive integer
 * Runtime: 92 ms (faster than 52.59 %)
 * Memory Usage: 40.4 MB (less than 60.36 %)
 */

const reverseBits = n => {
    return parseInt([...n.toString(2)].reverse().join("").padEnd(32,"0"), 2);
}
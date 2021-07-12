/**
 * Problems
 * 1323. Maximum 69 Number
 * https://leetcode.com/problems/maximum-69-number/
 * @param {number} num
 * @return {number}
 * Runtime: 80 ms (faster than 44.85 %)
 * Memory Usage: 38.8 MB (less than 33.58 %)
 */

const maximum69Number = num => {
    return +num.toString().replace("6", "9");
}
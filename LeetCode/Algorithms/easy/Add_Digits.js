/**
 * Problems
 * 258. Add Digits
 * https://leetcode.com/problems/add-digits/
 * @param {number} num
 * @return {number}
 * Runtime: 92 ms (faster than 69.74 %)
 * Memory Usage: 40.2 MB (less than 55.21 %)
 */

const addDigits = num => {
    while (num >= 10) {
        num = Math.floor(num / 10) + num % 10;
    }
    return num;
}
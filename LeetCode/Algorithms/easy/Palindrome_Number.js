/**
 * Problems
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @returns {boolean}
 * Runtime: 188 ms (faster than 93.84 %)
 * Memory Usage: 48.1 MB (less than 91.76 %)
 */

const isPalindrome = x => {
    if(x < 0) return false;

    const reverseNumber = 1*x.toString().split("").reverse().join("");

    if(x === reverseNumber) return true;
    else return false;
}
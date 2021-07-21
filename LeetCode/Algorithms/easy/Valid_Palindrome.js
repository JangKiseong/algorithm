/**
 * Problems
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 * Runtime: 84 ms (faster than 87.65 %)
 * Memory Usage: 41 MB (less than 75.91 %)
 */

const isPalindrome = s => {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (s.length <= 1) return true;
    const prePalindrome = [...s.substring(Math.ceil(s.length/2), s.length)].reverse();
    for (let i=0;i<prePalindrome.length;i++) {
        if (s[i] !== prePalindrome[i]) return false;
    }
    return true;
}
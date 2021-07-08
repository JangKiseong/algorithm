/**
 * Problems
 * 28. Implement strStr()
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @returns {number} 
 * Runtime: 68 ms (faster than 96.30 %)
 * Memory Usage: 38.8 MB (less than 75.20 %)
 */

const strStr = (haystack, needle) => {
    return haystack.indexOf(needle);
}
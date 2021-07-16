/**
 * Problems
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 104 ms (faster than 48.27 %)
 * Memory Usage: 45 MB (less than 15.64 %)
 */

const isAnagram = (s, t) => {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t;
}
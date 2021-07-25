/**
 * Problems
 * 290. Word Pattern
 * https://leetcode.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * Runtime: 72 ms (faster than 79.51 %)
 * Memory Usage: 38.7 MB (less than 27.99 %)
 */

const wordPattern = (pattern, s) => {
    const patterns = {};
    const words = {};
    s = s.split(" ");
    if (pattern.length !== s.length) return false;
    for (let i=0;i<s.length;i++) {
        if (!patterns[pattern[i]] && !words[s[i]]) {
            patterns[pattern[i]] = s[i];
            words[s[i]] = pattern[i];
        } 
    }
    for (let i=0;i<s.length;i++) {
        if (patterns[pattern[i]] !== s[i] || words[s[i]] !== pattern[i]) return false;
    }
    return true;
}
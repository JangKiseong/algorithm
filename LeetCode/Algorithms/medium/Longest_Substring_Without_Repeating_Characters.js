/**
 * Problems
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 * Runtime: 100 ms (faster than 88.12 %)
 * Memory Usage: 46.1 MB (less than 19.30 %)
 */

const lengthOfLongestSubstring = s => {
    const substring = {};
    let maxSubstringLength = 0;
    let startIndex = 0;
    for (let index = 0; index < s.length; index++) {
      while (substring[s[index]]) {
        delete substring[s[startIndex]];
        startIndex++;
      }
      substring[s[index]] = 1;
      maxSubstringLength = Math.max(maxSubstringLength, index - startIndex + 1);
    }
    return maxSubstringLength;
}
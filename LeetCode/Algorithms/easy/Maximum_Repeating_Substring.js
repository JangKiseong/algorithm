/**
 * Problems
 * 1668. Maximum Repeating Substring
 * https://leetcode.com/problems/maximum-repeating-substring/
 * @param {string} sequence
 * @param {string} word
 * @returns {number}
 * Runtime: 64 ms (faster than 98.69 %)
 * Memory Usage: 38.9 MB (less than 60.13 %)
 */

const maxRepeating = (sequence, word) => {
    let count = 0;
    let substring = word;
    while (sequence.includes(substring)) {
        substring += word;
        count++;
    }

    return count;
}
/**
 * Problems
 * 819. Most Common Word
 * https://leetcode.com/problems/most-common-word/
 * @param {string} paragraph
 * @param {string[]} banned
 * @returns {string}
 * Runtime: 84 ms (faster than 59.97 %)
 * Memory Usage: 40.5 MB (less than 69.77 %)
 */

const mostCommonWord = (paragraph, banned) => {
    const words = {};
    let strings = [...paragraph.split(",")].map(string => {
        return [...string.split(" ")].map(word => word.replace(/[^a-zA-Z]/g, "").toLowerCase());
    });
    strings = strings.flat(1);
    strings.forEach(string => {
        if (string.length && banned.indexOf(string) < 0) {
            !words[string] ? words[string] = 1 : words[string]++;
        }   
    })
    return Object.keys(words).reduce((pre, post) => words[pre] > words[post] ? pre : post);
}
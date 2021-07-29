/**
 * Problems
 * 1859. Sorting the Sentence
 * https://leetcode.com/problems/sorting-the-sentence/
 * @param {string} s
 * @returns {string}
 * Runtime: 76 ms (faster than 57.31 %)
 * Memory Usage: 38.7 MB (less than 26.95 %)
 */

const sortSentence = s => {
    const sentence = {};
    let answer = [];
    s = s.split(" ");

    s.forEach(string => {
        sentence[string[string.length-1]] = string.substring(0, string.length-1);
    })

    const keys = Object.keys(sentence);
    
    keys.forEach(key => {
        answer.push(sentence[key]);
    })

    return answer.join(" ");
}
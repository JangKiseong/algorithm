/**
 * Problems
 * 942. DI String Match
 * https://leetcode.com/problems/di-string-match/
 * @param {string} s
 * @returns {number[]}
 * Runtime: 92 ms (faster than 78.28 %)
 * Memory Usage: 43.4 MB (less than 13.64 %)
 */

const diStringMatch = s => {
    const numbers = new Array(s.length+1).fill(0);
    const matchedNumbers = [];
    let preIndex = 0;
    let postIndex = numbers.length-1;
    for (let i=0;i<=s.length;i++) {
        numbers[i] = i;
    }
    
    for (let i=0;i<s.length;i++) {
        if (s[i] === "D") {
            matchedNumbers.push(numbers[postIndex]);
            postIndex--;
        } else if (s[i] === "I") {
            matchedNumbers.push(numbers[preIndex]);
            preIndex++;
        }
    }
    matchedNumbers.push(numbers[preIndex]);
    return matchedNumbers;
}
/**
 * Problems
 * 338. Counting Bits
 * https://leetcode.com/problems/counting-bits/
 * @param {number} n
 * @returns {number[]}
 * Runtime: 148 ms (faster than 26.21 %)
 * Memory Usage: 50.2 MB (less than 20.71 %)
 */

const countBits = n => {
    const answer = [];
    for (let i=0;i<=n;i++) {
        answer.push(i.toString(2).replace(/0/g, "").length);
    }
    return answer;
}
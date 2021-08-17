/**
 * Problems
 * 1945. Sum of Digits of String After Convert
 * https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Runtime: 80 ms (faster than 75.00 %)
 * Memory Usage: 41.1 MB (less than 32.75 %)
 */

const getLucky = (s, k) => {
    let converted = '';
    let answer = 0;

    s.split("").forEach(string => {
        converted += string.charCodeAt(0)-96;
    });
    while(k) {
        let count = 0;
        for (let i=0;i<converted.length;i++) {
            count += +converted[i];
        }
        converted = count + '';
        answer = count;
        k--;
    }
    return answer;
}
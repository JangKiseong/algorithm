/**
 * Problems
 * 1422. Maximum Score After Splitting a String
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/
 * @param {string} s
 * @returns {number}
 * Runtime: 128 ms (faster than 29.52 %)
 * Memory Usage: 43.8 MB (less than 46.67 %)
 */

const maxScore = s => {
    const zeroRegexp = new RegExp(/1/, 'g');
    const oneRegexp = new RegExp(/0/, 'g');
    let index = 1;
    let max = 0;

    while(true){
        if(index === s.length) break;

        const left = s.slice(0, index).replace(zeroRegexp, "");
        const right = s.slice(index, s.length).replace(oneRegexp, "");

        if(left.length + right.length > max){
            max = left.length + right.length;
        }
        index++;
    }
    return max;
}
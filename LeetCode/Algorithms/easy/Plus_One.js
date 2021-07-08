/**
 * Problems
 * 66. Plus One
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @returns {number[]} 
 * Runtime: 76 ms (faster than 67.91 %)
 * Memory Usage: 39.2 MB (less than 8.21 %)
 */

const plusOne = digits => {
    digits[digits.length-1] += 1;
    for(let i=digits.length-1;i>=0;i--){
        if(!digits[i-1] && digits[i] === 10){
            digits[i] = 0;
            digits.unshift(1);
        } else if(digits[i] === 10){
            digits[i] = 0;
            digits[i-1] += 1;
        } else break;
    }

    return digits;
}
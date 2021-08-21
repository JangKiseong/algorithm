/**
 * Problems
 * 367. Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square/
 * @param {number} num
 * @return {boolean}
 * Runtime: 76 ms (faster than 51.87 %)
 * Memory Usage: 38.9 MB (less than 20.07 %)
 */

const isPerfectSquare = num => {
    for (let i=0;i<=Math.ceil(num/2);i++) {
        if (i ** 2 === num) return true;
        if (i ** 2 > num) break;
    }

    return false;
}
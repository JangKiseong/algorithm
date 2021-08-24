/**
 * Problems
 * 1137. N-th Tribonacci Number
 * https://leetcode.com/problems/n-th-tribonacci-number/
 * @param {number} n
 * @returns {number}
 * Runtime: 76 ms (faster than 35.66 %)
 * Memory Usage: 37.8 MB (less than 98.75 %)
 */

const tribonacci = n => {
    const tribonacciArray = [0,1,1];
    if (n<3) return tribonacciArray[n];

    for (let i=3;i<=n;i++) {
        tribonacciArray[i] = tribonacciArray[i-1] + tribonacciArray[i-2] + tribonacciArray[i-3];
    }
    return tribonacciArray.pop();
}
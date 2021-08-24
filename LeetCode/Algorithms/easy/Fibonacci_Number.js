/**
 * Problems
 * 509. Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @returns {number}
 * Runtime: 88 ms (faster than 37.22 %)
 * Memory Usage: 38.4 MB (less than 88.48 %)
 */

const fib = n => {
    if (n===0) return 0;
    if (n===1) return 1;
    return fib(n-1) + fib(n-2);
}
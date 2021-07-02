/**
 * Problems
 * 507. Perfect Number
 * https://leetcode.com/problems/perfect-number/
 * @param {number} num
 * @returns {boolean}
 * Runtime: 4056 ms (faster than 14.29 %)
 * Memory Usage: 37.9 MB (less than 98.21 %)
 */

 const checkPerfectNumber = num => {
    let gcd = 0;
    for(let i=0;i<=num/2;i++){
        if(num % i === 0) gcd += i;
    }

    return gcd === num ? true : false;
}
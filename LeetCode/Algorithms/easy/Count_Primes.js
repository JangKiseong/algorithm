/**
 * Problems
 * 204. Count Primes
 * https://leetcode.com/problems/count-primes/
 * @param {number} n
 * @returns {number}
 * Runtime: 1,364 ms (faster than 5.31 %)
 * Memory Usage: 39 MB (less than 93.28 %)
 */

 const isPrime = number => {
    for (let i=3;i<=Math.ceil(Math.sqrt(number));i+=2){
        if (number % i === 0) return false;
    }

    return true;
}

 const countPrimes = n => {

    if (n <= 2) return 0;
    
    let count = 1;

    for (let i=3;i<n;i+=2){
        isPrime(i) && (count++);
    }

    return count;
}
/**
 * Problems
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @returns {number}
 * Runtime: 108 ms (faster than 6.79 %)
 * Memory Usage: 38.6 MB (less than 44.74 %)
 */

const factorial = number => {
    if (number <= 1) {
        return 1;
    } else {
        return number * factorial(number-1);
    }
}

const climbStairs = n => {
    if(n<=3) return n;
    let p = n;
    let q = 0;
    let count = 0;

    while(true){
        let nNum = factorial(n);
        let pNum = factorial(p);
        let qNum = factorial(q);

        count += Math.floor(nNum / (pNum * qNum));
        if(n >= 3) {
            n -= 1;
            p -= 2;
            q = n - p;
        } else break;
    }
    return count;
}
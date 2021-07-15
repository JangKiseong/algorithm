/**
 * Problems
 * 263. Ugly Number
 * https://leetcode.com/problems/ugly-number/
 * @param {number} n
 * @return {boolean}
 * Runtime: 88 ms (faster than 74.57 %)
 * Memory Usage: 39.4 MB (less than 97.86 %)
 */

const isUgly = n => {
    if(n <= 6) return true;
    let isUglyNumber = false;
    while(true){    
        if (n % 2 === 0) n /= 2;
        else if (n % 3 === 0) n /= 3;
        else if (n % 5 === 0) n /= 5;
        else if (n === 1) {
            isUglyNumber = true;
            break;
        } else {
            isUglyNumber = false;
            break;
        }
    }
    return isUglyNumber;
}


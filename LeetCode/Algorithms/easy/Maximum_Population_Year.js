/**
 * Problems
 * 1854. Maximum Population Year
 * https://leetcode.com/problems/maximum-population-year/
 * @param {number[][]} logs
 * @returns {number}
 * Runtime: 72 ms (faster than 98.63 %)
 * Memory Usage: 39.1 MB (less than 80.41 %)
 */

const maximumPopulation = logs => {
    const count = new Array(101).fill(0);

    logs.forEach(log => {
        count[log[0]-1950]++;
        count[log[1]-1950]--;
    })

    let maxYear = 0;
    for (let i=1;i<101;i++) {
        count[i] += count[i-1];
        if (count[i]>count[maxYear]) maxYear = i; 
    }

    return maxYear+1950;
}
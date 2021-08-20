/**
 * Problems
 * 1672. Richest Customer Wealth
 * https://leetcode.com/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number}
 * Runtime: 76 ms (faster than 45.63 %)
 * Memory Usage: 39 MB (less than 50.77 %)
 */

const maximumWealth = accounts => {
    let maxWealth = 0;

    accounts.forEach(account => {
        const wealth = account.reduce((acc, cur) => {return acc+cur}, 0);

        if (wealth > maxWealth) maxWealth = wealth;
    });

    return maxWealth;
}
/**
 * Problems
 * 122. Best Time to Buy and Sell Stock 2
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 * Runtime: 72 ms (faster than 91.66 %)
 * Memory Usage: 40.1 MB (less than 42.28 %)
 */

const maxProfit = prices => {
    let profit = 0;
    let prePrice = prices[0];

    prices.forEach(price => {
        if (prePrice < price) {
            profit += price - prePrice;
        }
        prePrice = price;
    })
    
    return profit;
}
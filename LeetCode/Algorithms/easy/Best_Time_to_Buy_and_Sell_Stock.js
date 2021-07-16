/**
 * Problems
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 * Runtime: 100 ms (faster than 65.01 %)
 * Memory Usage: 49.2 MB (less than 15.6 %)
 */

const maxProfit = prices => {
    let profit = 0;
    let minPrice = prices[0];

    prices.forEach(price => {
        if (minPrice > price) {
            minPrice = price;
        } else if (price - minPrice > profit) {
            profit = price - minPrice;
        }
    })

    return profit;
}
/**
 * Problems
 * 1217. Minimum Cost to Move Chips to The Same Position
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
 * @param {number[]} position
 * @returns {number}
 * Runtime: 89 ms (faster than 14.00 %)
 * Memory Usage: 38.3 MB (less than 86.67 %)
 */

const minCostToMoveChips = position => {
    let oddCost = 0;
    let evenCost = 0;

    position.forEach(location => {
        if (location % 2 === 0) evenCost++;
        if (location % 2 === 1) oddCost++;
    })
    
    return Math.min(oddCost, evenCost);
}
/**
 * Problems
 * 575. Distribute Candies
 * https://leetcode.com/problems/distribute-candies/
 * @param {number[]} candyType
 * @returns {number} 
 * Runtime: 132 ms (faster than 74.5 %)
 * Memory Usage: 52.5 MB (less than 43.56 %)
 */

const distributeCandies = candyType => {
    let uniqueCandy = [...new Set(candyType)].length;
    while (uniqueCandy > candyType.length/2) {
        uniqueCandy--;
    }
    return uniqueCandy;
}
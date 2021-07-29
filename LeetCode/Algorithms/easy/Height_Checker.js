/**
 * Problems
 * 1051. Height Checker
 * https://leetcode.com/problems/height-checker/
 * @param {number[]} heights
 * @returns {number}
 * Runtime: 68 ms (faster than 92.75 %)
 * Memory Usage: 39 MB (less than 36.04 %)
 */

const heightChecker = heights => {
    const sortedHeights = Array.from(heights).sort((pre, post) => pre-post);
    let answer = 0;

    for (let i=0;i<heights.length;i++) {
        if (heights[i] !== sortedHeights[i]) answer++;
    }

    return answer;
}
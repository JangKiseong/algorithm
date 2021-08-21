/**
 * Problems
 * 1848. Minimum Distance to the Target Element
 * https://leetcode.com/problems/minimum-distance-to-the-target-element/
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @returns {number}
 * Runtime: 96 ms (faster than 16.43 %)
 * Memory Usage: 39.7 MB (less than 85.0 %)
 */

const getMinDistance = (nums, target, start) => {
    let minimized = nums.length;

    for (let i=0;i<nums.length;i++) {
        if (nums[i] === target && minimized > Math.abs(i - start)) {
            minimized = Math.abs(i - start);
        }
    }

    return minimized;
}
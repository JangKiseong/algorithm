/**
 * Problems
 * 268. Missing number
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @returns {number}
 * Runtime: 100 ms (faster than 40.17 %)
 * Memory Usage: 41.5 MB (less than 23.70 %)
 */

const missingNumber = nums => {
    nums = nums.sort((pre, post) => pre-post);

    for (let i=0;i<nums.length;i++) {
        if (nums[i] !== i) return i;
    }

    return nums.length;
}
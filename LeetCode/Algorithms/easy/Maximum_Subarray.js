/**
 * Problems
 * 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @returns {number}
 * Runtime: 76 ms (faster than 88.14 %)
 * Memory Usage: 40.3 MB (less than 27.98 %)
 */

const maxSubArray = nums => {
    for (let i=1;i<nums.length;i++) {
        nums[i] = nums[i]+nums[i-1] > nums[i] ? nums[i]+nums[i-1] : nums[i];
    }
    return Math.max(...nums);
}
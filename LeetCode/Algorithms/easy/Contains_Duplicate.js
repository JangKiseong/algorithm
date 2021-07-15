/**
 * Problems
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 72 ms (faster than 98.83 %)
 * Memory Usage: 45.6 MB (less than 44.44 %)
 */

const containsDuplicate = nums => {
    const uniqueNums = [...new Set(nums)];
    return nums.length === uniqueNums.length ? true : false;
}
/**
 * Problems
 * 905. Sort Array By Parity
 * https://leetcode.com/problems/sort-array-by-parity/
 * @param {number[]} nums
 * @returns {number[]}
 * Runtime: 88 ms (faster than 81.25 %)
 * Memory Usage: 41.6 MB (less than 34.9 %)
 */

const sortArrayByParity = nums => {
    const sortedArray = [];

    for (let i=0;i<nums.length;i++) {
        if (nums[i] % 2 === 0) sortedArray.push(nums[i]);
    }
    for (let i=0;i<nums.length;i++) {
        if (nums[i] % 2 === 1) sortedArray.push(nums[i]);
    }
    return sortedArray;
}
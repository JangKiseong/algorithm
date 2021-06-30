/**
 * Problems
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @returns {number}
 * Runtime: 72 ms (faster than 99.72 %)
 * Memory Usage: 41.6 MB (less than 16.05 %)
 */

const removeDuplicates = nums => {
    const newArray = [...new Set(nums)];
    for(let i=0;i<newArray.length;i++){
        nums[i] = newArray[i];
    }
    return newArray.length;
}
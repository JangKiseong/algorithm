/**
 * Problems
 * 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @returns {void} Do not return anything, modify nums in-place instead.
 * Runtime: 80 ms (faster than 83.41 %)
 * Memory Usage: 40.5 MB (less than 44.83 %)
 */

const moveZeroes = nums => {
    if (nums.length <= 1) return;
    for (let i=0;i<nums.length;i++) {
        if (!nums[i]) {
            nums.push(nums.splice(i,1));
            i--;
        }
    }
    nums = nums.flat(1);
}
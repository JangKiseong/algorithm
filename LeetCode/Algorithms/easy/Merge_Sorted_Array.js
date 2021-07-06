/**
 * Problems
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @returns {void} Do not return anything, modify nums1 in-place instead.
 * Runtime: 72 ms (faster than 86.97 %)
 * Memory Usage: 39 MB (less than 18.49 %)
 */

const merge = (nums1, m, nums2, n) => {
    if(n === 0) return;
    else {
        for(let i=m;i<nums1.length;i++){
            nums1[i] = nums2.pop();
        }
        nums1 = nums1.sort((pre, post) => pre-post);
    }
}
/**
 * Problems
 * 350. Intersection of Two Arrays 2
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]} 
 * Runtime: 72 ms (faster than 93.47 %)
 * Memory Usage: 40.4 MB (less than 51.04 %)
 */

const intersect = (nums1, nums2) => {
    const intersect = [];

    for (let i=0;i<nums2.length;i++) {
        if (nums1.indexOf(nums2[i]) >= 0) {
            const num = nums2[i];
            nums1.splice(nums1.indexOf(num), 1);
            nums2.splice(i, 1);
            i--;
        }
    }
    
    return intersect;
}
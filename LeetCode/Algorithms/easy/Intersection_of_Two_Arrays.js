/**
 * Problems
 * 349. Intersection of Two Arrays
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]} 
 * Runtime:  ms (faster than  %)
 * Memory Usage:  MB (less than  %)
 */

const intersection = (nums1, nums2) => {
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    const intersection = [];
    const length = nums1.length >= nums2.length ? nums1.length : nums2.length;
    for (let i=0;i<length;i++) {
        if (length === nums1.length) {
            nums2.indexOf(nums1[i]) >= 0 ? intersection.push(nums1[i]) : null;
        } else {
            nums1.indexOf(nums2[i]) >= 0 ? intersection.push(nums2[i]) : null;
        }
    }
    return intersection;
}
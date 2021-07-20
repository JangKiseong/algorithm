/**
 * Problems
 * 219. Contains Duplicate 2
 * https://leetcode.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 * Runtime: 148 ms (faster than 40.77 %)
 * Memory Usage: 55.9 MB (less than 37.37 %)
 */

const containsNearbyDuplicate = (nums, k) => {
    const count = {};

    for (let index=0;index<nums.length;index++) {
        if (count[nums[index]] !== 0 && !count[nums[index]]) {
            count[nums[index]] = index;
        } else if (Math.abs(count[nums[index]]-index) <= k) {
            return true;
        } else {
            count[nums[index]] = index;
        }
    }
    return false;
}
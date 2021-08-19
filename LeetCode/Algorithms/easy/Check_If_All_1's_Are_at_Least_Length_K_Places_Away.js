/**
 * Problems
 * 1437. Check If All 1's Are at Least Length K Places Away
 * https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Runtime: 80 ms (faster than 91.3 %)
 * Memory Usage: 47.7 MB (less than 23.91 %)
 */

const kLengthApart = (nums, k) => {
    let distance = [];

    for (let i=0;i<nums.length;i++) {
        if(nums[i]) distance.push(i);
    }

    for (let i=0;i<distance.length;i++) {
        if (isFinite(distance[i+1]) && distance[i+1]-distance[i]-1 < k) {
            return false;
        } 
    }

    return true;
}
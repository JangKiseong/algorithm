/**
 * Problems
 * 961. N-Repeated Element in Size 2N Array
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 * @param {number[]} nums
 * @returns {number}
 * Runtime: 72 ms (faster than 98.44 %)
 * Memory Usage: 41.7 MB (less than 77.12 %)
 */

const repeatedNTimes = nums => {
    const hash = {};
    for(let i=0;i<nums.length;i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        } else return nums[i];
    }
}
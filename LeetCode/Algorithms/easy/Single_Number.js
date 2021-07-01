/**
 * Problems
 * 136. Single Number
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @returns {number}
 * Runtime: 192 ms (faster than 16.41 %)
 * Memory Usage: 47.7 MB (less than 5.03 %)
 */

const singleNumber = nums => {
    if(nums.length === 1) return nums[0];
    nums.push(undefined);
    nums.sort((pre, post) => pre-post);
    for(let i=0;i<nums.length-1;i += 2){
        console.log(nums[i], nums[i+1])
        if(nums[i] !== nums[i+1]){
            return nums[i];
        }
    }
}
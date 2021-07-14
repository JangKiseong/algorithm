/**
 * Problems
 * 414. Third Maximum Number
 * https://leetcode.com/problems/third-maximum-number/
 * @param {number[]} nums
 * @returns {number}
 * Runtime: 80 ms (faster than 67.34 %)
 * Memory Usage: 39.8 MB (less than 71.85 %)
 */

const thirdMax = nums => {
    nums = [...new Set(nums.sort((pre, post) => pre-post))];
    const max = nums.pop();
    let third;
    if (nums.length) nums.pop();
    if (nums.length) {
        third = nums.pop();
    };
    
    if (third !== undefined) return third;
    else return max;
}
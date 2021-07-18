/**
 * Problems
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 * Runtime: 88 ms (faster than 46.51 %)
 * Memory Usage: 43.5 MB (less than 7.73 %)
 */

const majorityElement = nums => {
    nums = nums.sort((pre, post) => pre-post);
    const uniqueNums = [...new Set(nums)];
    let majorityNum;
    for (let i=0;i<uniqueNums.length;i++) {
        const countNums = nums.lastIndexOf(uniqueNums[i]) - nums.indexOf(uniqueNums[i]) + 1;
        if (countNums > nums.length/2) {
            majorityNum = uniqueNums[i];
            break;
        }
    }
    return majorityNum;
}

/**
 * Faster Answer
 * Runtime: 81 ms (faster than 63.70 %)
 * Memory Usage: 41.9 MB (less than 43.65 %)
 */

const majorityElement = nums => {
    const countNums = {};
    for (let i=0;i<nums.length;i++) {
        if (countNums[nums[i]]) countNums[nums[i]]++;
        else countNums[nums[i]] = 1;

        if (countNums[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    }

}
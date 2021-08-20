/**
 * Problems
 * 448. Find All Numbers Disappeared in an Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * @param {number[]} nums
 * @returns {number[]}
 * Runtime: 176 ms (faster than 32.85 %)
 * Memory Usage: 56 MB (less than 7.41 %)
 */

const findDisappearedNumbers = nums => {
    const comparisonArray = new Array(nums.length).fill(0);
    const uniqueNums = [...new Set(nums)].sort((pre, post) => pre-post);
    const disappearedNumbers = [];
    let index = 0;
    for (let i=0;i<comparisonArray.length;i++) {
        comparisonArray[i] = i+1;
    }
    for (let i=0;i<comparisonArray.length;i++) {
        if (comparisonArray[i] === uniqueNums[index]) {
            index++;
        } else {
            disappearedNumbers.push(comparisonArray[i]);
        }
    }
    return disappearedNumbers;
}
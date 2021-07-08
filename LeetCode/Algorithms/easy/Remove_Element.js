/**
 * Problems
 * 27. Remove Element
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @returns {void} 
 * Runtime: 72 ms (faster than 87.80 %)
 * Memory Usage: 38.7 MB (less than 49.86 %)
 */

const removeElement = (nums, val) => {
    const lastElementIndex = nums.lastIndexOf(val);
    for(let i=0;i<lastElementIndex+1;i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--
        } else if(i === lastElementIndex) break;
    }

    return nums.length;
}
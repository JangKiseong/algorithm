/**
 * Problems
 * 1089. Duplicate Zeros
 * https://leetcode.com/problems/duplicate-zeros/
 * @param {number[]} arr
 * @returns {void} Do not return anything, modify arr in-place instead.
 * Runtime: 76 ms (faster than 98.60 %)
 * Memory Usage: 40.5 MB (less than 54.97 %)
 */

 const duplicateZeros = arr => {
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
}
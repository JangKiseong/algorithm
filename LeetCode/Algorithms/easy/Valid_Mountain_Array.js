/**
 * Problems
 * 941. Valid Mountain Array
 * https://leetcode.com/problems/valid-mountain-array/
 * @param {number[]} arr
 * @return {boolean}
 * Runtime: 84 ms (faster than 41.83 %)
 * Memory Usage: 41.7 MB (less than 85.97 %)
 */

const validMountainArray = arr => {
    const top = Math.max(...arr);
    const increasingMountain = arr.slice(0, arr.lastIndexOf(top)+1);
    const decreasingMountain = arr.slice(arr.indexOf(top), arr.length);
    let validFlag = true;

    if (increasingMountain.length === 1 || decreasingMountain.length === 1) return false;

    for (let i=0;i<increasingMountain.length-1;i++) {
        if (increasingMountain[i] >= increasingMountain[i+1]) validFlag = false;
    }

    for (let i=0;i<decreasingMountain.length-1;i++) {
        if (decreasingMountain[i] <= decreasingMountain[i+1]) validFlag = false;
    }

    return validFlag;
}
/**
 * Problems
 * 1394. Find Lucky Integer in an Array
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/
 * @param {number[]} arr
 * @returns {number[]}
 * Runtime: 84 ms (faster than 57.55 %)
 * Memory Usage: 39.9 MB (less than 78.77 %)
 */

const findLucky = arr => {
    const frequency = {};
    let luckyInteger = -1;

    arr.forEach(number => {
        if (!frequency[number]) frequency[number] = 1;
        else frequency[number]++;
    })

    Object.keys(frequency).filter(value => {
        if (+value === frequency[value]) luckyInteger = value;
    })

    return luckyInteger;
}
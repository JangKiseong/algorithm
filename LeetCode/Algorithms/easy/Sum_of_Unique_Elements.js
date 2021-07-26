/**
 * Problems
 * 1748. Sum of Unique Elements
 * https://leetcode.com/problems/sum-of-unique-elements/
 * @param {number[]} nums
 * @return {number}
 * Runtime: 76 ms (faster than 70.07 %)
 * Memory Usage: 39.2 MB (less than 38.46 %)
 */

const sumOfUnique = nums => {
    const numbers = {};
    let count = 0;

    nums.forEach(num => {
        if (!numbers[num]) numbers[num] = 1;
        else numbers[num]++;
    });

    Object.keys(numbers).forEach(key => {
        if (numbers[key] === 1) count += +key;
    })

    return count;
}
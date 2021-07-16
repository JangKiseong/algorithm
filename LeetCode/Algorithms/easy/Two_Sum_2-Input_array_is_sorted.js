/**
 * Problems
 * 167. Two Sum 2 - Input array is sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * Runtime: 424 ms (faster than 5.81 %)
 * Memory Usage: 39.1 MB (less than 45.45 %)
 */

const twoSum = (numbers, target) => {
    let answer = [];

    for (let i=0;i<numbers.length;i++) {
        for (let j=0;j<numbers.length;j++) {
            if (i !== j && numbers[i] + numbers[j] === target) {
                answer = [i+1, j+1];
                break;
            } 
        }
        if (answer.length === 2) break;
    }

    return answer;
}
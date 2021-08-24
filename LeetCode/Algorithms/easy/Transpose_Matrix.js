/**
 * Problems
 * 867. Transpose Matrix
 * https://leetcode.com/problems/transpose-matrix/
 * @param {number[][]} matrix
 * @returns {number[][]}
 * Runtime: 72 ms (faster than 99.22 %)
 * Memory Usage: 41 MB (less than 82.10 %)
 */

const transpose = matrix => {
    const transposedArray = [];
    for (let i=0;i<matrix[0].length;i++) {
        transposedArray.push(new Array(matrix.length).fill(0));
    }
    for (let row=0;row<matrix.length;row++) {
        for (let column=0;column<matrix[0].length;column++) {
            transposedArray[column][row] = matrix[row][column];
        }
    }
    return transposedArray;
}
/**
 * Problems
 * 1572. Matrix Diagonal Sum
 * https://leetcode.com/problems/matrix-diagonal-sum/
 * @param {number[][]} mat
 * @return {number}
 * Runtime: 84 ms (faster than 43.72 %)
 * Memory Usage: 41.4 MB (less than 7.10 %)
 */

const diagonalSum = mat => {
    let count = 0;

    for (let row=0;row<mat.length;row++) {
        for (let column=0;column<mat[0].length;column++) {
            if (row === column) count += mat[row][column];
        }
    }

    mat.map(element=>element.reverse());

    for (let row=0;row<mat.length;row++) {
        for (let column=0;column<mat[0].length;column++) {
            if (row === column) count += mat[row][column];
        }
    }

    if (mat.length === mat[0].length && mat.length % 2 === 1 && mat.length > 2) {
        count -= mat[Math.floor(parseFloat(mat.length/2))][Math.floor(parseFloat(mat.length/2))];
    }

    return count;
}
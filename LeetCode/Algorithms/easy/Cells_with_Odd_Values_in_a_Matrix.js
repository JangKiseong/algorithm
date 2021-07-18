/**
 * Problems
 * 1252. Cells with Odd Values in a Matrix
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 * Runtime: 137 ms (faster than 7.80 %)
 * Memory Usage: 41.3 MB (less than 21.28 %)
 */

const oddCells = (m, n, indices) => {
    let cell = [];
    let count = 0;

    for (let i=0;i<m;i++) {
        cell[i] = new Array(n).fill(0);
    }

    indices.forEach(indice => {
        const [row, column] = indice;

        for (let i=0;i<n;i++) {
            cell[row][i]++;
        }
        for (let i=0;i<m;i++) {
            cell[i][column]++;
        }
    })

    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (cell[i][j] % 2 === 1) count++;
        }
    }

    return count;
}
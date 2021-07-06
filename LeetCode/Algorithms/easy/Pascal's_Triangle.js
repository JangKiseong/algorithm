/**
 * Problems
 * 118. Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @returns {number[][]}
 * Runtime: 76 ms (faster than 52.49 %)
 * Memory Usage: 38.4 MB (less than 67.41 %)
 */

const generate = numRows => {
    const pascalTriangle = [];
    for(let i=0;i<numRows;i++){
        pascalTriangle[i] = [];
    }

    pascalTriangle[0][0] = 1;

    for(let i=1;i<numRows;i++){
        for(let j=0;j<=i;j++){
            if(j === 0 || j === i){
                pascalTriangle[i][j] = 1;
            } else {
                pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
            }
        }
    }

    return pascalTriangle;
}
/**
 * Problems
 * 119. Pascal's Triangle 2
 * https://leetcode.com/problems/pascals-triangle-ii/
 * @param {number} rowIndex
 * @returns {number[]} 
 * Runtime: 80 ms (faster than 44.48 %)
 * Memory Usage: 39.4 MB (less than 12.85 %)
 */

const getRow = rowIndex => {
    const pascalTriangle = [];
    for(let i=0;i<=rowIndex;i++){
        pascalTriangle[i] = [];
    }

    pascalTriangle[0][0] = 1;

    for(let i=1;i<=rowIndex;i++){
        for(let j=0;j<=i;j++){
            if(j === 0 || j === i){
                pascalTriangle[i][j] = 1;
            } else {
                pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
            }
        }
    }

    return pascalTriangle[rowIndex];
}
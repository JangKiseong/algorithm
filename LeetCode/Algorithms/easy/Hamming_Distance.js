/**
 * Problems
 * 461. Hamming Distance
 * https://leetcode.com/problems/hamming-distance/
 * @param {number} x
 * @param {number} y
 * @returns {number}
 * Runtime: 80 ms (faster than 40.42 %)
 * Memory Usage: 39.3 MB (less than 10.75 %)
 */

const hammingDistance = (x, y) => {
    let xBits = x.toString(2);
    let yBits = y.toString(2);
    let count = 0;

    if (xBits.length > yBits.length) {
        yBits = "0".repeat(xBits.length-yBits.length) + yBits;
    } else if (xBits.length < yBits.length) {
        xBits = "0".repeat(yBits.length-xBits.length) + xBits;
    }

    for(let i=0;i<xBits.length;i++){
        if(xBits[i] !== yBits[i]) count++;
    }

    return count;
}
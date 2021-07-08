/**
 * Problems
 * 771. Jewels and Stones
 * https://leetcode.com/problems/jewels-and-stones/
 * @param {string} jewels
 * @param {string} stones
 * @returns {number} 
 * Runtime: 72 ms (faster than 95.42 %)
 * Memory Usage: 40 MB (less than 45.73 %)
 */

const numJewelsInStones = (jewels, stones) => {
    let count = 0;

    for(let i=0;i<stones.length;i++){
        for(let j=0;j<jewels.length;j++){
            if(stones[i] === jewels[j]) count++;
        }
    }

    return count;
}
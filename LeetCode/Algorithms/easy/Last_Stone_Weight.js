/**
 * Problems
 * 1046. Last Stone Weight
 * https://leetcode.com/problems/last-stone-weight/
 * @param {number[]} stones
 * @returns {number}
 * Runtime: 72 ms (faster than 85.99 %)
 * Memory Usage: 40.1 MB (less than 48.86 %)
 */

const lastStoneWeight = stones => {
    stones = stones.sort((pre, post) => pre-post);

    for (let i=stones.length-1;i>0;i--) {
        if (isFinite(stones[i-1])) {
            const postStone = stones.pop();
            const preStone = stones.pop();
            postStone - preStone === 0 ? i-- : stones.push(postStone-preStone);
            stones = stones.sort((pre, post) => pre-post);
        }
    }

    return stones;
}
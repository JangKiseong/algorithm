/**
 * Problems
 * 1925. Count Square Sum Triples
 * https://leetcode.com/problems/count-square-sum-triples/
 * @param {number} n
 * @returns {number}
 * Runtime: 656 ms (faster than 5.31 %)
 * Memory Usage: 38.8 MB (less than 75.51 %)
 */

const countTriples = n => {
    let count = 0;

    for (let line1=1;line1<n;line1++) {
        for (let line2=1;line2<n;line2++) {
            for (let line3=1;line3<=n;line3++) {
                if (line1 > line3 || line2 > line3) continue;
                if (line1**2 + line2**2 === line3**2) count++;
            }
        }
    }

    return count;
}
/**
 * Problems
 * 1652. Defuse the Bomb
 * https://leetcode.com/problems/defuse-the-bomb/
 * @param {number[]} code
 * @param {number} k
 * @returns {number[]}
 * Runtime: 72 ms (faster than 92.74 %)
 * Memory Usage: 39 MB (less than 82.26 %)
 */

const decrypt = (code, k) => {
    const decryptedCode = new Array(code.length).fill(0);
    if (k === 0) return decryptedCode;

    code.forEach((_, index) => {
        let idx = index;
        let count = 0;

        while (count !== k) {
            if (k > 0 && idx !== index) {
                decryptedCode[index] += code[idx];
                idx++;
                count++;
            } else if (k > 0) {
                idx++;
            } else if (k < 0 && idx !== index) {
                decryptedCode[index] += code[idx];
                idx--;
                count--;
            }  else if (k < 0) {
                idx--;
            }

            if (idx >= code.length) {
                idx = 0;
            } else if (idx < 0) {
                idx = code.length-1;
            }
        }   
    })

    return decryptedCode;
}
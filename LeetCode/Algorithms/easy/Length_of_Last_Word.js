/**
 * Problems
 * 58. Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @returns {number}
 * Runtime: 76 ms (faster than 68.74 %)
 * Memory Usage: 38.8 MB (less than 30.65 %)
 */

const lengthOfLastWord = s => {
    const stringArray = s.split(" ");
    const len = stringArray.length;
    for(let i=0;i<len;i++){
        if(stringArray[stringArray.length-1] === "") stringArray.pop();
    }
    if(!stringArray[stringArray.length-1]) return 0;
    else return stringArray[stringArray.length-1].length;
}

/**
 * good example
 * Runtime: 68 ms (faster than 94.98 %)
 * Memory Usage: 38.8 MB (less than 30.65 %)
 */

const lengthOfLastWord = s => {
    return s.trim().split(" ").pop().length;
}
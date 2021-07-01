/**
 * Problems
 * 1758. Minimum Changes To Make Alternating Binary String
 * https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 * @param {string} s
 * @returns {number}
 * Runtime: 380 ms (faster than 6.25 %)
 * Memory Usage: 47.1 MB (less than 5.56 %)
 */

const minOperations = s => {
    const binaryStrings = [...s].map(string => {return string === "1" ? true : false});
    let zeroOneCount = 0;
    let zeroOneFlag = false;
    let oneZeroCount = 0;
    let oneZeroFlag = true;

    for(let i=0;i<binaryStrings.length;i++){
        console.log(binaryStrings[i], zeroOneFlag, oneZeroFlag)
        if(binaryStrings[i] !== zeroOneFlag){
            zeroOneCount++;
        }

        if(binaryStrings[i] !== oneZeroFlag){
            oneZeroCount++;
        } 

        zeroOneFlag = !zeroOneFlag;
        oneZeroFlag = !oneZeroFlag;
    }
    
    return Math.min(zeroOneCount, oneZeroCount);
}
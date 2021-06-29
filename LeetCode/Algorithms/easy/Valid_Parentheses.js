/**
 * Problems
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 * Runtime: 80 ms (faster than 62.28 %)
 * Memory Usage: 39.2 MB (less than 42.66 %)
 */

const isValid = s => {
    const brackets = s.split("");
    const bracketsStack = [];
    const pairwise = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    brackets.forEach(bracket => {
        if(!bracketsStack.length){
            bracketsStack.push(bracket);
        } else if(pairwise[bracketsStack[bracketsStack.length-1]] === bracket){
            bracketsStack.pop();
        } else {
            bracketsStack.push(bracket);
        }
    })

    if(!bracketsStack.length) return true;
    else return false;
}
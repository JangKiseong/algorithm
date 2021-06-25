/**
 * Problems
 * 7. Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 * Runtime: 92 ms (faster than 99.94 %)
 * Memory Usage: 40.2 MB (less than 50.45 %)
 */

const reverse = x => {
    
    const checkOverUnderFlow = inputValue => {
        if(inputValue < -1 * 2**31 || inputValue > 2**31-1) return 0;
        else return inputValue;
    }

    if(x > 0){
        const plusNum = 1 * x.toString().split("").reverse().join("");
        return checkOverUnderFlow(plusNum);
    } else {
        const minusNum = x.toString().split("").reverse();
        minusNum.pop();
        return checkOverUnderFlow(-1 * minusNum.join(""));
    }
}
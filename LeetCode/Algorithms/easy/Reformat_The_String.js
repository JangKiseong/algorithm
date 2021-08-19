/**
 * Problems
 * 1417. Reformat The String
 * https://leetcode.com/problems/reformat-the-string/
 * @param {string} s
 * @return {string}
 * Runtime: 76 ms (faster than 99.04 %)
 * Memory Usage: 42.1 MB (less than 97.12 %)
 */

const reformat = s => {
    let answer = '';
    const string = s.replace(/[0-9]/g, "");
    const number = s.replace(/[a-z]/g, "");
    const stringLength = string.length;
    const numberLength = number.length;

    if ((!stringLength && numberLength >= 2) || (!numberLength && stringLength >= 2)) return "";

    if (stringLength >= numberLength) {
        for (let i=0;i<stringLength;i++) {
            answer += string[i];
            if (!number[i]) break;
            answer += number[i];
        }
    } else {
        for (let i=0;i<numberLength;i++) {
            answer += number[i];
            if (!string[i]) break;
            answer += string[i];
        }
    }

    return answer;
}
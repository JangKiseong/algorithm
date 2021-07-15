/**
 * Problems
 * 1694. Reformat Phone Number
 * https://leetcode.com/problems/reformat-phone-number/
 * @param {string} number
 * @return {string}
 * Runtime: 76 ms (faster than 76.63 %)
 * Memory Usage: 40 MB (less than 30.98 %)
 */

const reformatNumber = number => {
    const numberFilter = new RegExp(/[^0-9]/,'g');
    let onlyNumber = number.replace(numberFilter, "");
    let reformatedNumber = "";
    let numberLength = onlyNumber.length;

    while (numberLength) {
        if (numberLength > 4) {
            reformatedNumber += onlyNumber.substring(0, 3);
            onlyNumber = onlyNumber.substring(3);
            numberLength -= 3;
        } else if (numberLength === 2 || numberLength === 3) {
            reformatedNumber += onlyNumber;
            break;
        } else if (numberLength === 4) {
            reformatedNumber += onlyNumber.substring(0, 2) + "-" + onlyNumber.substring(2, 4);
            break;
        }
        reformatedNumber += "-";
    }
    if(reformatedNumber[reformatedNumber.length-1] === "-") return reformatedNumber.substring(0, reformatedNumber.length-2);
    else return reformatedNumber;
}
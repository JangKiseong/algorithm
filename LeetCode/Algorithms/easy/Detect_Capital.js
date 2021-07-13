/**
 * Problems
 * 520. Detect Capital
 * https://leetcode.com/problems/detect-capital/
 * @param {string} word
 * @returns {boolean}
 * Runtime: 124 ms (faster than 5.54 %)
 * Memory Usage: 40.2 MB (less than 34.35 %)
 */

const detectCapitalUse = word => {
    if(word.length === 1) return true;
    const firstWordUniCode = word.charCodeAt(0);
    const secondWordUniCode = word.charCodeAt(1);
    const regexpCapital = {
        capitals: new RegExp(/[A-Z]/,'g'),
        notCapitals: new RegExp(/[a-z]/,'g')
    }

    if (firstWordUniCode >= 97 && secondWordUniCode >= 97){
        return !regexpCapital.capitals.test(word);
    } else if (firstWordUniCode < 97 && secondWordUniCode < 97){
        return !regexpCapital.notCapitals.test(word);
    } else if(firstWordUniCode < 97 && secondWordUniCode >= 97){
        const newWord = word.slice(1, word.length);
        return !regexpCapital.notCapitals.test(newWord);
    } else {
        return false;
    }
}

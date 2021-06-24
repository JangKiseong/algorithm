/**
 * Problems
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 * Runtime: 76 ms (faster than 92.09 %)
 * Memory Usage: 40.6 MB (less than 23.28 %)
 */

const longestCommonPrefix = strs => {
    if(strs.length === 1) return strs[0];
    let index = 1;
    let prefix = strs[0].substring(0, index);
    if(prefix.length === 0) return "";
    while(true){
        const substringArray = strs.filter(elemet => elemet.indexOf(prefix) === 0);

        if(substringArray.length === strs.length){
            index++;
            prefix = strs[0].substring(0, index);
            if(index > strs[0].length) break;
        } else if(substringArray.length < strs.length){
            prefix = prefix.substring(0, index-1);
            break;
        }
    }

    return prefix;
}
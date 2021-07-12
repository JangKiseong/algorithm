/**
 * Problems
 * 455. Assign Cookies
 * https://leetcode.com/problems/assign-cookies/
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * Runtime: 196 ms (faster than 8.67 %)
 * Memory Usage: 40.7 MB (less than 96 %)
 */

const findContentChildren = (g, s) => {
    g = g.sort((pre, post) => post-pre);
    s = s.sort((pre, post) => post-pre);
    let gIndex = g.length-1;
    let sIndex = s.length-1;
    let satisfaction = 0;
    while(gIndex >= 0 && sIndex >= 0){
        if(s[sIndex] >= g[gIndex]){
            g.pop();
            s.pop();
            gIndex--;
            sIndex--;
            satisfaction++;
        } else if(g[gIndex] > s[sIndex]){
            sIndex--;
        }
    }
    return satisfaction;
}
/**
 * Problems
 * 383. Ransome Note
 * https://leetcode.com/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns {boolean}
 * Runtime: 108 ms (faster than 26.88 %)
 * Memory Usage: 43.9 MB (less than 13.12 %)
 */

const canConstruct = (ransomNote, magazine) => {
    const objRansomNote = {};
    const objMagazine = {};
    let isPossible = true;

    ransomNote = ransomNote.split("");
    magazine = magazine.split("");

    for (let i=0;i<ransomNote.length;i++) {
        if (!objRansomNote[ransomNote[i]]) {
            objRansomNote[ransomNote[i]] = 1;
        } else {
            objRansomNote[ransomNote[i]]++;
        }
    }

    for (let i=0;i<magazine.length;i++) {
        if (!objMagazine[magazine[i]]) {
            objMagazine[magazine[i]] = 1;
        } else {
            objMagazine[magazine[i]]++;
        }
    }

    Object.keys(objRansomNote).forEach(key => {
        if (objMagazine[key] < objRansomNote[key]) {
            isPossible = false;
        } else if (!objMagazine[key] || !objRansomNote[key]) {
            isPossible = false;
        }
    });

    return isPossible;
}
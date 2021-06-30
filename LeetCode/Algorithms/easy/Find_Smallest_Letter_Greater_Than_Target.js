/**
 * Problems
 * 744. Find Smallest Letter Greater Than Target
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * @param {character[]} letters
 * @param {character} target
 * @returns {character}
 * Runtime: 84 ms (faster than 69.01 %)
 * Memory Usage: 41.3 MB (less than 5.87 %)
 */

const nextGreatestLetter = (letters, target) => {
    const newLetters = [...letters, target].sort();
    let targetIndex = newLetters.indexOf(target);
    for(let i=0;i<newLetters.length;i++){
        if(newLetters[targetIndex+1] === target) targetIndex++;
        else break;
    }
    if(!newLetters[targetIndex+1]) return newLetters[0];
    else return newLetters[targetIndex+1];
}
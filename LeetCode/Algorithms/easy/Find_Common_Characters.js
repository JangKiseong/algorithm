/**
 * Problems
 * 1002. Find Common Characters
 * https://leetcode.com/problems/find-common-characters/
 * @param {string[]} words
 * @returns {string[]}
 * Runtime: 104 ms (faster than 50.12 %)
 * Memory Usage: 45.8 MB (less than 25.41 %)
 */

const commonChars = words => {
    const checkWord = [...words.pop()];
    let commonCharsArray = [];
    words = words.map(word => {
        return [...word];
    })
    for(let i=0;i<checkWord.length;i++){
        const hasWordArray = [];

        for(let j=0;j<words.length;j++){
            if(words[j].indexOf(checkWord[i])>=0){
                hasWordArray.push(checkWord[i]);
                words[j].splice(words[j].indexOf(checkWord[i]), 1)
            }
        }

        if(hasWordArray.length === words.length) commonCharsArray.push(hasWordArray.pop());
    }

    return commonCharsArray;
}
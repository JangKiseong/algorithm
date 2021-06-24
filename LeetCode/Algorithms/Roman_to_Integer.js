/**
 * Problems
 * 13. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 * Runtime: 132 ms (faster than 99.35 %)
 * Memory Usage: 45.3 MB (less than 52.42 %)
 */

const romanToInt = s => {
    let number = 0;

    const romanInteger = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    const getSubtract = (preRomanNumber, postRomanNumber) => {
        if(preRomanNumber === "I"){
            if(postRomanNumber === "V") return 4;
            else if(postRomanNumber === "X") return 9;
        }
        if(preRomanNumber === "X"){
            if(postRomanNumber === "L") return 40;
            else if(postRomanNumber === "C") return 90;
        }
        if(preRomanNumber === "C"){
            if(postRomanNumber === "D") return 400;
            else if(postRomanNumber === "M") return 900;
        }
    }

    const romanNumber = s.split("");

    for(let i=0;i<romanNumber.length;i++){
        const substractNumber = getSubtract(romanNumber[i], romanNumber[i+1])
        if(substractNumber){
            number += substractNumber;
            i++;
        } else {
            number += romanInteger[romanNumber[i]];
        }
    }

    return number;
}
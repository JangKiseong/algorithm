/**
 * Problems
 * 202. Happy Number
 * https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @returns {boolean}
 * Runtime: 68 ms (faster than 99.46 %)
 * Memory Usage: 40.6 MB (less than 41.61 %)
 */

const isHappy = n => {
    let happyNumber = n.toString();
    let count = 10;
    while(count--){
        let happyArray = [...happyNumber];
        let tempHappy = 0;
        happyArray.forEach(number => {
            tempHappy += (+number) ** 2;
        })
        if(tempHappy === 1) {
            happyNumber = 1;
            break;
        } else {
            happyNumber = tempHappy.toString();
        }
    }

    if(happyNumber === 1) return true;
    else return false;
}
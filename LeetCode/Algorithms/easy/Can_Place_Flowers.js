/**
 * Problems
 * 605. Can Place Flowers
 * https://leetcode.com/problems/can-place-flowers/
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * Runtime: 80 ms (faster than 73.99 %)
 * Memory Usage: 41.6 MB (less than 10.34 %)
 */

const canPlaceFlowers = (flowerbed, n) => {
    let index = flowerbed.indexOf(0);

    while (index < flowerbed.length) {

        if (!flowerbed[index-1] && !flowerbed[index] && !flowerbed[index+1]) {
            flowerbed[index] = 1;
            index+=2;
            n--;
        } else index++;

        if (n <= 0) break;
    }

    if (n <= 0) return true;
    else return false;
}
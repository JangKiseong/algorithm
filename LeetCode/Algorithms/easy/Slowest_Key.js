/**
 * Problems
 * 1629. Slowest Key
 * https://leetcode.com/problems/slowest-key/
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @returns {character}
 * Runtime: 103 ms (faster than 15.28 %)
 * Memory Usage: 40.7 MB (less than 43.98 %)
 */

const slowestKey = (releaseTimes, keysPressed) => {
    const keyPressedTimes = {};

    keyPressedTimes[keysPressed[0]] = releaseTimes[0];

    [...keysPressed].forEach((keyPressed, index) => {
        const releaseTime = releaseTimes[index] - releaseTimes[index-1];
        if (!keyPressedTimes[keyPressed] || keyPressedTimes[keyPressed] < releaseTime) {
            keyPressedTimes[keyPressed] = releaseTime;
        } 
    })

    let maxPressedKey = keysPressed[0];
    Object.keys(keyPressedTimes).forEach(key => {
        if (keyPressedTimes[key] > keyPressedTimes[maxPressedKey]) {
            maxPressedKey = key;
        } else if (keyPressedTimes[key] === keyPressedTimes[maxPressedKey]) {
            if (key.charCodeAt(0) > maxPressedKey.charCodeAt(0)) {
                maxPressedKey = key;
            }
        }
    })

    return maxPressedKey;
}
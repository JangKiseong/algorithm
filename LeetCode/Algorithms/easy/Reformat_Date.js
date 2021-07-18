/**
 * Problems
 * 1507. Reformat Date
 * https://leetcode.com/problems/reformat-date/
 * @param {string} date
 * @returns {string}
 * Runtime: 116 ms (faster than 6.16 %)
 * Memory Usage: 39.6 MB (less than 8.22 %)
 */

const reformatDate = date => {
    const [DAY, MONTH, YEAR] = date.split(" ");
    return new Date(`${YEAR} ${MONTH} ${parseInt(DAY)}`).toISOString().split("T")[0];
}
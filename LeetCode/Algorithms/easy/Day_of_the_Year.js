/**
 * Problems
 * 1154. Day of the Year
 * https://leetcode.com/problems/day-of-the-year/
 * @param {string} date
 * @return {number}
 * Runtime: 188 ms (faster than 91.46 %)
 * Memory Usage: 48.3 MB (less than 87.80 %)
 */

const dayOfYear = date => {
    const thatDay = new Date(date).getTime();
    const startDayOfThatYear = new Date(`${date.substring(0,4)}-01-01`).getTime();
    let countDays = thatDay - startDayOfThatYear;

    return countDays / (24 * 60 * 60 * 10 ** 3) + 1;
}
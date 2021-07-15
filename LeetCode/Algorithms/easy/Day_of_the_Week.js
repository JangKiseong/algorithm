/**
 * Problems
 * 1185. Day of the Week
 * https://leetcode.com/problems/day-of-the-week/
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 * Runtime: 72 ms (faster than 82.58 %)
 * Memory Usage: 39.1 MB (less than 15.73 %)
 */

const dayOfTheWeek = (day, month, year) => {
    const thatDay = new Date(`${year}-${month}-${day}`).getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[thatDay];
}
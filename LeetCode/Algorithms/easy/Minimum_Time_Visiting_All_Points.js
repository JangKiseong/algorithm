/**
 * Problems
 * 1266. Minimum Time Visiting All Points
 * https://leetcode.com/problems/minimum-time-visiting-all-points/
 * @param {number[][]} points
 * @returns {number}
 * Runtime: 96 ms (faster than 28.57 %)
 * Memory Usage: 39.6 MB (less than 92.21 %)
 */

const minTimeToVisitAllPoints = points => {
    let count = 0;

    for (let i=1;i<points.length;i++) {
        const xLength = Math.abs(points[i][0] - points[i-1][0]);
        const yLength = Math.abs(points[i][1] - points[i-1][1]);
        count += xLength >= yLength ? xLength : yLength;
    }

    return count;
}
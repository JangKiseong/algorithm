/**
 * Problems
 * 551. Student Attendance Record 1
 * https://leetcode.com/problems/student-attendance-record-i/
 * @param {string} s
 * @return {boolean}
 * Runtime: 64 ms (faster than 99.71 %)
 * Memory Usage: 39.1 MB (less than 26.44 %)
 */

const checkRecord = s => {
    let absentCount = 0;
    let lateCount = 0;
    let lateFlag = false;

    [...s].forEach(attendance => {

        if(attendance === 'A'){
            absentCount++;
            lateCount = 0;
        }else if(attendance === 'L'){
            lateCount++;
        } else {
            lateCount = 0;
        }

        if(lateCount >= 3){
            lateFlag = true;
        }
    })

    if(absentCount < 2 && !lateFlag) return true;
    else return false;
}
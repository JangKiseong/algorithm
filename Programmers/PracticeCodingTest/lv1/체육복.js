// 코딩테스트 연습 > 탐욕법(Greedy) > 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
    let answer = 0;
    let students = new Array(n).fill(1);

    lost.forEach(lostStudent => {
        students[lostStudent-1] = 0;
    });

    for(let i=0;i<lost.length;i++){
        for(let j=0;j<reserve.length;j++){
            if(lost[i] === reserve[j]){
                students[reserve[j]-1] = 1;
                lost.splice(i,1);
                reserve.splice(j,1);
                i--;
                j--;
            }
        }
    }

    reserve.forEach(reserveStudent => {
        if(reserveStudent-2 >=0 && !students[reserveStudent-2]) students[reserveStudent-2] = 1;
        else if(reserveStudent < n && !students[reserveStudent]) students[reserveStudent] = 1;
    });
    students.forEach(student => student && answer++);

    return answer;
}
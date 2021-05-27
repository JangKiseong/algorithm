// 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
    let answer = 0;

    for(let i=0;i<a.length;i++){
        answer += a[i] * b[i];
    }

    return answer;
}
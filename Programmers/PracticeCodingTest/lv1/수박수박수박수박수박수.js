// 코딩테스트 연습 > 연습문제 > 수박수박수박수박수박수?
// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    let answer = '';
    let waterClap = ["수", "박"];

    for(let i=0;i<n;i++){
        answer += waterClap[i % 2];
    }

    return answer;
}
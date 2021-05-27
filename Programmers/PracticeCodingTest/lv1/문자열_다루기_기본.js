// 코딩테스트 연습 > 연습문제 > 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    let answer = true;

    [...s].forEach(word => isNaN(word) && (answer = false));
    if(s.length !== 4 && s.length !== 6) answer = false;
    
    return answer;
}
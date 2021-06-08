// 코딩테스트 연습 > 연습문제 > 정수 제곰근 판별
// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    if(parseInt(Math.sqrt(n))**2 === n) return parseInt(Math.sqrt(n)+1)**2;
    else return -1;
}
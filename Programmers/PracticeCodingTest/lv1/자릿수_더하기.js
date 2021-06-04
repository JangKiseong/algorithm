// 코딩테스트 연습 > 연습문제 > 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    return [...String(n)].reduce((acc, cur) => {return acc*1+cur*1},0);
}
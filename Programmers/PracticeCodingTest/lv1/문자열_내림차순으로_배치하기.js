// 코딩테스트 연습 > 연습문제 > 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    return [...s].sort((pre, post) => pre > post ? -1 : pre < post ? 1 : 0).join("");
}
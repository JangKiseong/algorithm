// 코딩테스트 연습 > 연습문제 > 정수 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    return Number([...String(n)].sort((pre, post) => post-pre).join(""));
}
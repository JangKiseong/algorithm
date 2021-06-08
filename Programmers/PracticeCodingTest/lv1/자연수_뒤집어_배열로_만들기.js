// 코딩테스트 연습 > 연습문제 > 자연수 뒤집어 배열로 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    let answer = [];

    [...n.toString()].map(Number).map(value =>answer.unshift(value))

    return answer;
}
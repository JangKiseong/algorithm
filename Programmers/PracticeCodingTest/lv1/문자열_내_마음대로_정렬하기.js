// 코딩테스트 연습 > 연습문제 > 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
    return strings.sort((pre, post) =>{
        return pre[n] > post[n] ? 1 : pre[n]< post[n] ? -1 : pre > post ? 1 : -1;
    })
}
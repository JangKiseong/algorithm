// 코딩테스트 연습 > 연습문제 > 평균 구하기
// https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    return arr.reduce((acc, cur)=>{return acc+cur},0)/arr.length;
}
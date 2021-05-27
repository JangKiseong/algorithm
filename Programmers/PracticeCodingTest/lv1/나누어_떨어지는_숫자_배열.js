// 코딩테스트 연습 > 연습문제 > 나누어 떨어지는 숫자 배열
// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    let answer = [];

    arr.forEach(element => {
        if(element % divisor === 0) answer.push(element);
    })
    if(!answer.length) return [-1];
    else return answer.sort((a,b) => a-b);
}
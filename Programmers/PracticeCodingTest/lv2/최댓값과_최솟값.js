// 코딩테스트 연습 > 연습문제 > 최댓값과 최솟값
// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    let answer = '';
    let max;
    let min;

    answer = s.split(" ").map(Number);
    max = min = answer[0];
    answer.forEach(element => {
        if(element > max) max = element;
        if(element < min) min = element;
    })
    answer = min + " " + max;
    return answer;
}
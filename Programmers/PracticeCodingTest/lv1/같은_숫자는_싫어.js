// 코딩테스트 연습 > 연습문제 > 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr){
    let answer = [];
    let preValue;
    
    arr.forEach(value => {
        value !== preValue && answer.push(value);
        preValue = value;
    })
        
    return answer;
}
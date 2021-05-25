// 코딩테스트 연습 > 연습문제 > 올바른 괄호
// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
    let answer = 0;
    s = [...s];
    for(let i=0;i<s.length;i++){
        if(s[i] === "(") ++answer;
        if(s[i] === ")") --answer;
        if(answer < 0){
            answer = false;
            break;
        }
    }
    if(answer === 0) answer = true
    else answer = false;
    return answer;
}
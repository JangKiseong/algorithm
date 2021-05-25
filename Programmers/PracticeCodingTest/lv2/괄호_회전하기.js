// 코딩테스트 연습 > 월간 코드 챌린지 시즌2 > 괄호 회전하기
// https://programmers.co.kr/learn/courses/30/lessons/76502

function solution(s){
    let answer = 0;
    let brackets = [...s];
    for(let i=0;i< brackets.length;i++){
        const stack = new Array();
        brackets.forEach(bracket => {
            if(!stack.length) stack.push(bracket)
            else if(bracket === ")" && stack[stack.length - 1] === "(") stack.pop();
            else if(bracket === "}" && stack[stack.length - 1] === "{") stack.pop();
            else if(bracket === "]" && stack[stack.length - 1] === "[") stack.pop();
            else stack.push(bracket);
        })
        if(!stack.length) answer++;
        brackets.push(brackets.shift());
    }
    return answer;
}
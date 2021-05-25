// 코딩테스트 연습 > 2017 팁스타운 > 짝지어 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
    if (s.length % 2) return 0;

    let stack = [];

    for(let i=0;i<s.length;i++){
        if(!stack.length || stack[stack.length-1] !== s[i]) stack.push(s[i]);
        else stack.pop();
    }

    if (!stack.length) return 1;
    else return 0;
}
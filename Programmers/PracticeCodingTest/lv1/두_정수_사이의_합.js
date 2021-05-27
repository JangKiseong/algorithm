// 코딩테스트 연습 > 연습문제 > 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    let answer = 0;
    let big, small;
    if(a === b) return a;
    
    if(a>b){
        big = a;
        small = b;
    } else {
        big = b;
        small = a;
    }
        
    for(let i=small;i<=big;i++) answer += i;
    
    return answer;
}
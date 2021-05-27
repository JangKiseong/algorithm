// 코딩테스트 연습 > 연습문제 > 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
    if(n === 0) return 0;
    let answer = 1;
    
    for(let i=2;i<=n;i++){
        if(n % i === 0) answer += i;
    }
    
    return answer;
}
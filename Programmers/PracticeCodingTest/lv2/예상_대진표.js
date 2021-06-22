// 코딩테스트 연습 > 2017 팁스타운 > 예상 대진표
// https://programmers.co.kr/learn/courses/30/lessons/12985

function solution(n,a,b) {
    let answer = 0;

    if(a <= n/2 && b > n/2) return Math.log2(n);
    else if(a > n/2 && b <= n/2) return Math.log2(n);

    while(a !== b){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer ++;
    }
    return answer;
}
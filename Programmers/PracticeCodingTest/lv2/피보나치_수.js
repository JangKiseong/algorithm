// 코딩테스트 연습 > 연습문제 > 피보나치 수
// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
    const fibonacci = [0,1,1];

    if (n < 3) return fibonacci[n];

    for (let i=3;i<=n;i++) {
        fibonacci.push((fibonacci[i-1]+fibonacci[i-2])%1234567);
    }

    return fibonacci.pop();
}
// 코딩테스트 연습 > 연습문제 > 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
    let answer = 1;
    if(n===2) return answer;
    const isPrime = (number) => {
        for(let i=3;i<=Math.ceil(Math.sqrt(number));i+=2){
            if(number % i === 0) return false;
        }
        return true;
    }

    for(let i=3;i<=n;i+=2){
        isPrime(i) && answer++;
    }

    return answer;
}

// 코딩테스트 연습 > 완전탐색 > 카펫
// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    let answer = [];
    const divisor = [];

    for (let i=1;i<brown+yellow;i++) {
        if ((brown+yellow) % i === 0) divisor.push(i);
    }

    divisor.reverse();

    for (let i=0;i<divisor.length;i++) {
        for (let j=0;j<divisor.length;j++) {
            if (divisor[i] * divisor[j] === brown + yellow && (divisor[i] * 2 + divisor[j] * 2 - 4 === brown || divisor[i] * 2 + divisor[j] * 2 - 4 === brown)) {
                answer = [divisor[i], divisor[j]];
            }
        }
    }

    return answer.sort((pre, post) => post-pre);
}
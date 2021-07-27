// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [3차] n진수 게임
// https://programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
    let answer = '';
    let total = '';
    for (let i=0;i<=t*m;i++) {
        total += i.toString(n);
    }
    total = total.toUpperCase();
    for (let i=0;i<total.length;i++) {
        if (i % m + 1 === p) answer += total[i];
        if (answer.length === t) break;
    }

    return answer;
}
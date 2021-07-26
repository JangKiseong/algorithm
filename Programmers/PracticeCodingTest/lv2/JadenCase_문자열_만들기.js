// 코딩테스트 연습 > 연습문제 > JadenCase 문자열 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    let answer = [];
    s = s.toLowerCase().split(" ");
    if (s.length === 1) {
        return `${s[0][0].toUpperCase()}${s[0].slice(1)}`
    } else {
        s.forEach(strings => {
            if (strings.length) {
                answer.push(`${strings[0].toUpperCase()}${strings.slice(1)}`);
            } else answer.push("")
        })
        return answer.join(" ");
    }
}
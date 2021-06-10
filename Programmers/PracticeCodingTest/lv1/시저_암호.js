// 코딩테스트 연습 > 연습문제 > 시저 암호
// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let answer = [];

    [...s].forEach(string => {
        if(string === " ") answer.push(" ");
        else {
            let stringCode = string.charCodeAt(0)+n;
            if(string.charCodeAt(0) < 97 && stringCode > 90) stringCode  = 65 + stringCode % 91;
            if(string.charCodeAt(0) >= 97 && stringCode > 122) stringCode = 97 + stringCode % 123;
            answer.push(String.fromCharCode(stringCode));
        }
    })

    return answer.join("");
}
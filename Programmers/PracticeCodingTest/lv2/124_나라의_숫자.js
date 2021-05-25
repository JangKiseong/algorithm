// 코딩테스트 연습 > 연습문제 > 124 나라의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
    let answer = '';
    let share;
    let rest;
    let checkNumbers = [];

    while(n > 0){
        share = parseInt(n / 3);
        rest = n % 3;
        if(!rest) n=n-1;
        checkNumbers.unshift(rest);
        n = parseInt(n / 3);
    }

    checkNumbers.forEach(number => {
        if(number === 0) answer += '4'
        else if(number === 1) answer += '1'
        else if(number === 2) answer += '2'
    })
    
    return answer;
}
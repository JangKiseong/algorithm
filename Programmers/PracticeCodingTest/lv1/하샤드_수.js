// 코딩테스트 연습 > 연습문제 > 하샤드 수
// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    const harshadNum = [...x.toString()].map(Number).reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0);
    if(x % harshadNum === 0) return true;
    else return false;
}
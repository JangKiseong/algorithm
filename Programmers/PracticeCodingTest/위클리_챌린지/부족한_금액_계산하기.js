// 코딩테스트 연습 > 위클리 챌린지 > 1주차 - 부족한 금액 계산하기
// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    let answer = 0;

    for (let i=1;i<=count;i++) {
        answer += price * i;
    }
    return money - answer < 0 ? Math.abs(money - answer) : 0;
}
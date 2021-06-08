// 코딩테스트 연습 > 연습문제 > 서울에서 김서방 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
    let location = 0;
    seoul.forEach((name, index) => {if(name === "Kim") location = index});
    return `김서방은 ${location}에 있다`;
}
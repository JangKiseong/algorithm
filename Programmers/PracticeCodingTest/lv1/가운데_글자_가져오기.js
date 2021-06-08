// 코딩테스트 연습 > 연습문제 > 가운데 글자 가져오기
// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    if(s.length % 2 === 0){
        return s[Math.round(s.length/2)-1] + s[Math.round(s.length/2)];
    } else {
        return s[Math.round(s.length/2)-1];
    }
}
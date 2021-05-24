// 코딩테스트 연습 > 월간 코드 챌린지 시즌2 > 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    let answer = 0;

    signs.forEach((sign, idx) => {
        sign && (answer += absolutes[idx]);
        !sign && (answer -= absolutes[idx]);
    });
    
    return answer;
}
// 코딩테스트 연습 > 연습문제 > 다음 큰 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
    const filter = new RegExp(/0/,'g');
    const startNumberBits = n.toString(2).replace(filter, "");
    let answer = n+1;
    let nextNumberBits = answer.toString(2).replace(filter, "");

    while (startNumberBits !== nextNumberBits) {
        answer++;
        nextNumberBits = answer.toString(2).replace(filter, "");
    }

    return answer;
}
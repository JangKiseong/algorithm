// 코딩테스트 연습 > 탐욕법(Greedy) > 큰 수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
    let answer = [];
    let index = 0;
    while (k) {
        if (!answer.length) {
            answer.push(number[index]);
            index++;
        } else if (answer[answer.length-1] < number[index]) {
            answer.pop();
            k--;
        } else {
            answer.push(number[index]);
            index++;
        }
        if (index >= number.length) break;
    }
    if (k) {
        return answer.join("").substring(0, number.length-k);
    } else {
        return answer.join("")+number.slice(index);
    }
}
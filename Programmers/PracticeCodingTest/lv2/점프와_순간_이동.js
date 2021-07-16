// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 점프와 순간 이동
// https://programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
    let count = 0;

    while(n !== 0){
        if (parseInt(n/2) === n/2) {
            n /= 2;
        } else {
            n -= 1;
            count++;
        }
    }

    return count;
}
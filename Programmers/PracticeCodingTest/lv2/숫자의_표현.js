// 코딩테스트 연습 > 연습문제 > 숫자의 표현
// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
    let answer = 0;
    let count = 0;
    for (let preNumber=1;preNumber<Math.ceil(n/2);preNumber++) {
        count += preNumber;
        for (let postNumber=2;postNumber<=Math.ceil(n/2);postNumber++) {
            if(postNumber <= preNumber) continue;
            count += postNumber;
            if (count === n) {
                answer++;
                count = 0;
                break;
            } else if (count > n) {
                count = 0;
                break;
            }
        }
    }

    return answer+1;
}
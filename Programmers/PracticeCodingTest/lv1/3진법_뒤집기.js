// 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 3진법 뒤집기
// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    let answer = 0;
    let tempArray = [];

    while(n>0){
        tempArray.push(n % 3);
        n = parseInt(n / 3);
    }
    tempArray.reverse().forEach((element, idx) => {
        answer += element * 3 ** (idx);
    });

    return answer;
}

// 좋은 코드 예시

const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
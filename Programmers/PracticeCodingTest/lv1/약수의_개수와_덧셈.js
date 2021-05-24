// 코딩테스트 연습 > 월간 코드 챌린지 시즌2 > 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    let answer = 0;

    const getDivisoresNum = (num) => {
        let cnt = 1;
        for(let i=2;i<=num;i++){
            if(num % i === 0) cnt++;
        }
        return cnt;
    }

    for(let i=left;i<=right;i++){
        answer += i * (-1) ** getDivisoresNum(i);
    }
    
    return answer;
}
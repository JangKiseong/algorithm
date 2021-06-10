// 코딩테스트 연습 > 연습문제 > 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    let answer = 0;

    while(num > 1){
        if(num % 2 === 0) num /= 2;
        else num = num * 3 + 1;
        answer++;
    }
    if(answer >= 500)return -1
    else return answer;
}

console.log(solution(626331))
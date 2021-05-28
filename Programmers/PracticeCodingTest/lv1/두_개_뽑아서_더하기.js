// 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    let answer = [];

    numbers.forEach((number, index) => {
        numbers.forEach((num, idx) => {
            if(index !== idx) answer.push(number + num);
        });
    });

    return [...new Set(answer)].sort((a,b)=>a-b);
}
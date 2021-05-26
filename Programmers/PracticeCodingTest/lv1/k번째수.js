// 코딩테스트 연습 > 정렬 > K번째수
// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    let answer = [];

    commands.forEach(command => {
        answer.push(array.slice(command[0]-1, command[1]).sort((a, b) => a-b)[command[2]-1]);
    })

    return answer;
}
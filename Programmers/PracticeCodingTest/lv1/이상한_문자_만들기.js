// 코딩테스트 연습 > 연습문제 > 이상한 문자 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    let answer = '';
    const splitWords = s.split(" ");

    splitWords.forEach((words, index) => {
        for(let i=0;i<words.length;i++){
            if(i % 2 === 0) answer += words[i].toUpperCase();
            else answer += words[i].toLowerCase();
        }
        if(index < splitWords.length-1) answer += " ";
    })

    return answer;
}
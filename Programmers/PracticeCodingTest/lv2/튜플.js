// 코딩테스트 연습 > 2019 카카오 개발자 겨울 인턴십 > 튜플
// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    let answer = [];
    let hash = {};

    const text = JSON.parse(s.replace(/\{/g,"[").replace(/\}/g,"]")).sort((pre, post) => pre.length - post.length);
    text.forEach(array => {
        array.forEach(value => {
            if(!hash[value]){
                hash[value] = 1;
                answer.push(value);
            }
        })
    })
    return answer;
}
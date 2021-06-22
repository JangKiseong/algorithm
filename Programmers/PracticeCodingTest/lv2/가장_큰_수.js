// 코딩테스트 연습 > 정렬 > 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
    const answer = numbers.sort((pre, post) => {
        const preNum = pre + "" + post;
        const postNum = post + "" + pre;
        return postNum*1 - preNum*1;
    }).join("");
    
    if(answer*1 === 0) return "0";
    else return answer;
}
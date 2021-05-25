// 코딩테스트 연습 > 스택/큐 > 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    let answer = 0;
    let count = 0;
    
    while(priorities.length){

        let waitingDocument = priorities.shift();

        if(priorities.filter(document => document > waitingDocument).length){
            priorities.push(waitingDocument);
        } else {
            count ++;

            if(!location){
                return count;
            }
        }

        location--;

        if(location < 0) location = priorities.length - 1;
    }

    return answer;
}
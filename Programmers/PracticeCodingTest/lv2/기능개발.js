// 코딩테스트 연습 > 스택/큐 > 기능개발
// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    let answer = [];
    let distribution = [];
  
    while(true){  
        if(progresses[0] >= 100){
            distribution.push(progresses.shift());
            speeds.shift();
        } else {
            if(distribution.length){
                answer.push(distribution.length);
                distribution = [];    
            }
            if(!progresses.length) break;
            for(let i=0;i<progresses.length;i++){
                progresses[i] += speeds[i];
            }
        }  
    }
  
    return answer;
}
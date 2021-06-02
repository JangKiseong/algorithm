// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [1차] 추석 트래픽
// https://programmers.co.kr/learn/courses/30/lessons/17676

function solution(lines) {
    let answer = 0;
    const takingTimes = [];
    const stack = [];

    lines.forEach(line => {
        const splitLine = line.split(" ");
        const endTimes = new Date(splitLine[0]+" "+splitLine[1]).getTime();
        const startTimes = endTimes - Number(splitLine[2].replace("s",""))*1000;
        takingTimes.push([startTimes, endTimes]);
    });

    takingTimes.forEach(times => {
        if(!stack.length) stack.push(times);
        else if(times[0] - stack[stack.length-1][0] < 1000){
            if(stack[stack.length-1][0] < times[0]){
                stack.shift();
                stack.push(times);
                if(stack.length > answer) answer = stack.length;
            } else {
                stack.push(times);
                if(stack.length > answer) answer = stack.length;
            }
        } else if(times[0] - stack[stack.length-1][1] < 1000){
            stack.push(times);
            if(stack.length > answer) answer = stack.length;
        } else {
            stack.shift();
            stack.push(times);
            if(stack.length > answer) answer = stack.length;
        }
    })

    return answer;
}

const lines =  [
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
    ]

console.log(solution(lines));
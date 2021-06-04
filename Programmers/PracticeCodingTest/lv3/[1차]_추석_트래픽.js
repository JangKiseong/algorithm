// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [1차] 추석 트래픽
// https://programmers.co.kr/learn/courses/30/lessons/17676

function solution(lines) {
    let answer = 0;
    const takingTimes = [];
    let firstStartTime = 0;
    let lastEndTime = 0;
    let index = 0;
    if(lines.length === 1) return 1;

    lines.forEach(line => {
        const splitLine = line.split(" ");
        const endTime = new Date(splitLine[0]+" "+splitLine[1]).getTime();
        const startTime = endTime - Number(splitLine[2].replace("s",""))*1000+1;
        takingTimes.push([startTime, endTime]);
    });

    while(index < takingTimes.length){
        const startBasket = [];
        const endBasket = [];

        firstStartTime = takingTimes[index][0];
        lastEndTime = takingTimes[index][1];

        takingTimes.forEach(time => {
            if((time[0] <= firstStartTime && time[1] >= firstStartTime) 
                || (time[0] >= firstStartTime && time[1] <= firstStartTime+999) 
                || (time[0] <= firstStartTime+999 && time[1] >= firstStartTime+999)) 
                startBasket.push(time);
            if((time[0] <= lastEndTime && time[1] >= lastEndTime) 
                || (time[0] >= lastEndTime && time[1] <= lastEndTime+999) 
                || (time[0] <= lastEndTime+999 && time[1] >= lastEndTime+999)) 
                endBasket.push(time);
        })
        if(answer < startBasket.length) answer = startBasket.length;
        if(answer < endBasket.length) answer = endBasket.length;
        index++;
    }

    return answer;
}
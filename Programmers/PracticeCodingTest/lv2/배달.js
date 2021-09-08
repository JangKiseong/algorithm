// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 배달
// https://programmers.co.kr/learn/courses/30/lessons/12978

function solution(N, road, K) {
    const roadMap = new Array(N+1);
    for (let i=0;i<N+1;i++) {
        roadMap[i] = new Array(N+1).fill(999999);
        roadMap[i][i] = 0;
    }
    road.forEach(village => {
        if (!roadMap[village[0]][village[1]] || roadMap[village[0]][village[1]] > village[2]) {
            roadMap[village[0]][village[1]] = village[2];
            roadMap[village[1]][village[0]] = village[2];
        }
        
    });
    
    for (let k=1;k<=N;k++) {
        for (let from=1;from<=N;from++) {
            for (let to=1;to<=N;to++) {
                if (roadMap[from][to] > roadMap[from][k] + roadMap[k][to]) {
                    roadMap[from][to] = roadMap[from][k] + roadMap[k][to];
                }
            }
        }
    }

    return roadMap[1].filter(time => {return time <= K}).length;
}
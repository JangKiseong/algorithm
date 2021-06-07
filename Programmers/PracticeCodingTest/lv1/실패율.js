// 코딩테스트 연습 > 2019 KAKAO BLIND RECRUITMENT > 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    let hash = {};
    let stackUser = 0;

    stages.forEach(stage => hash[stage] = 0);
    stages.forEach(stage => hash[stage] += 1);

    for(let key in hash){
        let hashTemp = hash[key];
        hash[key] = hash[key] / (stages.length-stackUser);
        stackUser += hashTemp;
        if(key > N) delete hash[key]
    }
    
    for(let i=1;i<=N;i++) if(!hash[i]) hash[i] = 0;

    return Object.keys(hash).sort((pre, post) => hash[post] - hash[pre]).map(Number);
}
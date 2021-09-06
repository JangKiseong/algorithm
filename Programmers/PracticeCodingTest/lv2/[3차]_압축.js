// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [3차] 압축
// https://programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
    const answer = [];
    const AtoZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = {};
    const msgLength = msg.length;

    for (let i=0;i<AtoZ.length;i++) {
        index[AtoZ[i]] = i+1;
    }
    let idx = 0;
    let w = msg[idx];

    while (idx < msgLength) {
        idx++;
        if (idx === msgLength) break;
        let c = msg[idx];

        while (true) {
            if (!index[w+c]) {
                index[w+c] = Object.keys(index).length+1; 
                break;
            }
            
            w += c;
            idx++;
            c = msg[idx];
        }
        answer.push(index[w]);
        w = c;
    }
    
    index[w] && answer.push(index[w]);
    return answer;
}
// 코딩테스트 연습 > 2019 KAKAO BLIND RECRUITMENT > 오픈채팅방
// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record){
    let answer = new Array();
    let users = {};
    
    record.forEach(message => {
        const text = message.split(" ");
        if(text[0] === "Enter" || text[0] === "Change"){
            let key = text[1];
            let value = text[2];
            users[key] = value;
        }
    })

    record.forEach(message => {
        const text = message.split(" ");
        let key = text[1];
        if(text[0] === "Enter") answer.push(`${users[key]}님이 들어왔습니다.`);
        else if(text[0] === "Leave") answer.push(`${users[key]}님이 나갔습니다.`);
    })

    return answer;
}
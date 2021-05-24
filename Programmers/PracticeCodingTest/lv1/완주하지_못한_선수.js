// 코딩테스트 연습 > 헤시 > 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    let arrangeParticipant = participant.reduce((accu, curr) => {
      accu[curr] = (accu[curr] || 0) +1;
      return accu;
    }, {});
  
    completion.forEach(person => {
        arrangeParticipant[person]--;
        if(!arrangeParticipant[person]){
            delete arrangeParticipant[person];
        }
    })
  
    return Object.keys(arrangeParticipant)[0];
  }
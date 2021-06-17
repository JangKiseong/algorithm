// 코딩테스트 연습 > 2017 팁스타운 > 예상 대진표
// https://programmers.co.kr/learn/courses/30/lessons/12985

function solution(n,a,b) {
    let answer = 0;
    let participantArray = new Array(n).fill(0);
    let index = 0;

    participantArray[a-1] = 1;
    participantArray[b-1] = 1;

    while(true){

        if(participantArray[index] === 1 && participantArray[index+1] === 1) break;
        else if(participantArray[index] === 1){
            participantArray.splice(index+1, 1);
            index += 2;
        } else {
            participantArray.splice(index, 1);
            index += 2;
        }

        if(index >= participantArray.length) index = 0, answer++;
    }

    return answer;
}

console.log(solution(2**15,5,393));
// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [1차] 다트 게임
// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    let answer = 0;
    let tempAnswer = [];
    let tempDartResults = [...dartResult];
    let tempResult = [];
    let idx = 0;

    while(tempDartResults.length){
        if(tempDartResults[idx] === "S" || tempDartResults[idx] === "D" || tempDartResults[idx] === "T"){
            if(tempDartResults[idx+1] === "*" || tempDartResults[idx+1] === "#") tempResult.push(tempDartResults.splice(0,idx+2));
            else tempResult.push(tempDartResults.splice(0,idx+1));
            idx = 0;
        }
        idx++;
    }

    tempResult.forEach(oneTurn => {
        if(oneTurn.length === 3){
            if(oneTurn[2] === "*"){
                if(tempAnswer[tempAnswer.length-1]) tempAnswer[tempAnswer.length-1] *=2; 
                if(oneTurn[1] === "S") tempAnswer.push(2 * Number(oneTurn[0]));
                else if(oneTurn[1] === "D") tempAnswer.push(2 * Number(oneTurn[0])** 2);
                else if(oneTurn[1] === "T") tempAnswer.push(2 * Number(oneTurn[0])** 3);
            } else if(oneTurn[2] === "#"){
                if(oneTurn[1] === "S") tempAnswer.push(-1 * Number(oneTurn[0]));
                else if(oneTurn[1] === "D") tempAnswer.push(-1 * Number(oneTurn[0])** 2);
                else if(oneTurn[1] === "T") tempAnswer.push(-1 * Number(oneTurn[0])** 3);
            } else {
                if(oneTurn[2] === "S") tempAnswer.push(10);
                else if(oneTurn[2] === "D") tempAnswer.push(10 ** 2);
                else if(oneTurn[2] === "T") tempAnswer.push(10** 3);
            }
        } else {
            if(oneTurn[1] === "S") tempAnswer.push(Number(oneTurn[0]));
            else if(oneTurn[1] === "D") tempAnswer.push(Number(oneTurn[0])**2);
            else if(oneTurn[1] === "T") tempAnswer.push(Number(oneTurn[0])**3);
        }
    })

    tempAnswer.forEach(e => answer += e);

    return answer;
}
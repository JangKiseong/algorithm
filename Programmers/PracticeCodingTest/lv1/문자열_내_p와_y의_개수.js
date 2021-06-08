// 코딩테스트 연습 > 연습문제 > 문자열 내 p와 y의 개수
// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    let pNum = 0;
    let yNum = 0;
    console.log([...s]);
    [...s].forEach(string => {
        console.log(string)
        if(string === 'p') pNum += 1;
        if(string === 'y') yNum += 1;
    })
    
    if(pNum === yNum) return true;
    else return false;
}
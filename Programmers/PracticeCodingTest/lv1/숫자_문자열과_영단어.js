// 코딩테스트 연습 > 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    let answer = "";
    const numberWord = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }

    let tempWord = "";

    for (let i=0;i<s.length;i++) {
        if (isNaN(s[i])) tempWord += s[i];
        else answer += s[i];
        
        if (isFinite(numberWord[tempWord])) {
            answer += numberWord[tempWord];
            tempWord = "";
        }
    }

    return answer;
}
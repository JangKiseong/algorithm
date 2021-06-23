// 코딩테스트 연습 > 2020 KAKAO BLIND RECRUITMENT > 문자열 압축
// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    if(s.length === 1) return 1;
    let answer = [];

    let index = 0;
    let strLen = 1;
    let count = 1;
    let tempString = "";
    let subPreString = s.substring(index, strLen);

    while(true){
        if(strLen > s.length/2) break;

        const subPostString = s.substring(index+strLen, index+strLen*2)

        if(subPreString === subPostString){
            count++;
            index += strLen;
        } else if(subPreString !== subPostString){
            if(count === 1) tempString += subPreString;
            else tempString += count + subPreString;
            subPreString = subPostString;
            index += strLen;
            count = 1;
        }
        if(index+strLen >= s.length){
            if(count === 1) tempString += subPreString;
            else tempString += count + subPreString;
            answer.push(tempString);
            tempString = "";
            index=0;
            count=1;
            strLen++;
            subPreString = s.substring(index, strLen);
        }
    }

    return Math.min(...answer.map(element => element.length)) ;
}
// 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 이진 변환 반복하기
// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
    const zeroFilter = new RegExp(/[0]/,'g');
    let countZero = 0;
    let countTransform = 0;
    while(true){
        for(let i=0;i<s.length;i++){
            if (s[i] === "0") countZero++;
        }
        s = s.replace(zeroFilter, "");
        countTransform++;
        if (s === "1") break;
        s = s.length.toString(2);
    }

    return [countTransform, countZero];
}
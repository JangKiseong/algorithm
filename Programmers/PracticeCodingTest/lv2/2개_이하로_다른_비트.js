// 코딩테스트 연습 > 월간 코드 챌린지 시즌2 > 2개 이하로 다른 비트
// https://programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
    let answer = [];

    for (let i=0;i<numbers.length;i++) {
        if (numbers[i] % 2 === 0) {
            answer.push(numbers[i]+1);
        } else {
            let numberBits = numbers[i].toString(2);
            if (numberBits[numberBits.length-1] === "0") {
                answer.push(numbers[i]+1);
                continue;
            }
            const lastZeroIndex = numberBits.lastIndexOf("0");
            let newNumberBits;
            if (lastZeroIndex < 0) {
                newNumberBits = "10".padEnd(numberBits.length+1, "1");    
            } else {
                newNumberBits = numberBits.slice(0, lastZeroIndex);
                newNumberBits += "10";
                newNumberBits = newNumberBits.padEnd(numberBits.length, "1");
            }
            answer.push(parseInt(newNumberBits, 2))
        }
    }
    return answer;
}
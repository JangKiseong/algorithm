// 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 삼각 달팽이
// https://programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
    const answer = [];
    const tempAnswer = [];
    for(let i=0;i<n;i++) tempAnswer[i] = [];
    const endPoint = n *(n+1)/2;
    const snailArray = new Array(endPoint).fill().map((_, index) => index+1).sort((a,b) => b-a);
    let row = 0;
    let column = 0;
    let count = 1;

    while(snailArray.length){
        if(count < n) {
            tempAnswer[row][column] = snailArray.pop();
            row++;
            count++;
        } else if(count >= n && count < 2 * n) {
            tempAnswer[row][column] = snailArray.pop();
            column++;
            count++;
        } else if(count >= 2 * n) {
            row--;
            column--;
            count++;
            tempAnswer[row][column-1] = snailArray.pop();
            if(count === (3 * n - 2) && snailArray.length){
                row++;
                n-=3;
                column--;
                count=1;
            }
        }
    }

    tempAnswer.forEach(array => answer.push(...array));

    return answer;
}
// 코딩테스트 연습 > 위클리 챌린지 > 2주차 - 상호 평가
// https://programmers.co.kr/learn/courses/30/lessons/83201

const transpose = matrix => {
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < row; column++) {
        let temp = matrix[row][column];
        matrix[row][column] = matrix[column][row];
        matrix[column][row] = temp;
      }
    }
    return matrix;
}

function solution(scores) {
    let answer = '';
    scores = transpose(scores);
    scores.forEach((score, index) => {
        let grade;
        let firstMax = score.indexOf(Math.max(...score));
        let firstMin = score.indexOf(Math.min(...score));
        let lastMax = score.lastIndexOf(Math.max(...score));
        let lastMin = score.lastIndexOf(Math.min(...score));
        if ((firstMax === index && lastMax === index) || (firstMin === index && lastMin === index)) {
            grade = (score.reduce((acc, cur) => {return acc+cur}, 0) - score[index])/(score.length-1);
        } else {
            grade = score.reduce((acc, cur) => {return acc+cur},0)/score.length;
        }
        if (grade < 50) answer += 'F';
        else if (grade < 70) answer += 'D';
        else if (grade < 80) answer += 'C';
        else if (grade < 90) answer += 'B';
        else answer += 'A';
    })

    return answer;
}
// 코딩테스트 연습 > 완전탐색 > 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    var answer = [];

    let firstStudent = [1,2,3,4,5];
    let secondStudent = [2,1,2,3,2,4,2,5];
    let thirdStudent = [3,3,1,1,2,2,4,4,5,5];

    let firstStudentScore = 0;
    let secondStudentScore = 0;
    let thirdStudentScore = 0;

    answers.forEach((answer, idx) => {
        answer === firstStudent[idx % firstStudent.length] && firstStudentScore++;
        answer === secondStudent[idx % secondStudent.length] && secondStudentScore++;
        answer === thirdStudent[idx % thirdStudent.length] && thirdStudentScore++;
    })

    let maxScore = Math.max(firstStudentScore, secondStudentScore, thirdStudentScore);

    firstStudentScore === maxScore && answer.push(1);
    secondStudentScore === maxScore && answer.push(2);
    thirdStudentScore === maxScore && answer.push(3);

    return answer;
}
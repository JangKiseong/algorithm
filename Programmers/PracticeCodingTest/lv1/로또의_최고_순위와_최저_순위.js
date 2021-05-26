// 코딩테스트 연습 > 2021 Dev-Matching: 웹 백엔드 개발자(상반기) > 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {

    let answer = [];
    let winning = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6
    }
    let tempCorrect = 0;
    let tempUnknown = 0;

    lottos.forEach(lotto => {
        win_nums.findIndex(e => e === lotto) > -1 && tempCorrect++;
        if(lotto === 0) tempUnknown++;
    });
    answer.push(winning[tempCorrect+tempUnknown]);
    answer.push(winning[tempCorrect]);

    return answer;
}
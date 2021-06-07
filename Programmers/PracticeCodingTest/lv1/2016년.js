// 코딩테스트 연습 > 연습문제 > 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
    let countDays = 0;

    const days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    const month = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }

    for(let i=1;i<a;i++) countDays += month[i];
    countDays += b;

    return days[countDays%7];
}
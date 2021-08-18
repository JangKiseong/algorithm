// 코딩테스트 연습 > 정렬 > H-Index
// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citiations) {
    let answer = 0;
    citiations = citiations.sort((pre, post) => post - pre);
    if (!citiations.filter(value => value > 0).length) return 0;
    for (let i=0;i<citiations.length;i++) {
        const moreCitiation = citiations.slice(0, citiations.lastIndexOf(citiations[i]));
        if (moreCitiation.length >= citiations[i]) {
            answer = i;
            break;
        }
    }
    if (!answer) return citiations.length;
    return answer;
}
// 코딩테스트 연습 > 탐욕법(Greedy) > 구명보트
// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    if (people.length === 1) return 1;
    let answer = 0;

    people.sort((pre, post) => pre-post);
    let left = 0;
    let right = people.length-1;

    while (left !== right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
            answer++;
        } else {
            left++;
            answer++;
        }
    }

    return answer;
}
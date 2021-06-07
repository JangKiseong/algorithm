// 코딩테스트 연습 > 연습문제 > 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    if(arr.length === 1) return [-1];
    else {
        const test = arr.findIndex(item => {
            return item === Math.min(...arr);
        });
        return arr.filter(value => value !== arr[test]);
    }
}
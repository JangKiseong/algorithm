// 코딩테스트 연습 > 연습문제 > N개의 최소공배수
// https://programmers.co.kr/learn/courses/30/lessons/12953
const getGCD = (value1, value2) => (value2 > 0 ? getGCD(value2, value1 % value2) : value1);
const getLCM = (value1, value2, GCD) => (value1 * value2) / GCD;

function solution(arr) {
    let answer = 0;
    let GCD = arr[0];
    let LCM = 0;

    for (let i=0;i<arr.length;i++) {
        const tempGCD = getGCD(GCD, arr[i]);
        LCM = getLCM(GCD, arr[i], tempGCD);
        GCD = LCM;
    }

    return LCM;
}
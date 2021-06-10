// 코딩테스트 연습 > 연습문제 > 최대공약수와 최소공배수
// https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
    const getGCD = (value1, value2) => (value2 > 0 ? getGCD(value2, value1 % value2) : value1);
    const getLCM = (value1, value2, GCD) => (value1 * value2) / GCD;

    const GCD = getGCD(n, m);
    const LCM = getLCM(n, m, GCD);

    return [GCD, LCM];
}

console.log(solution(3, 12));
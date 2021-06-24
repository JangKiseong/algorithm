// 코딩테스트 연습 > Summer/Winter Coding(2019) > 멀쩡한 사각형
// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
    const getGCD = (value1, value2) => (value2 > 0 ? getGCD(value2, value1 % value2) : value1);
    const gcd = getGCD(w, h);

    return (w*h - (w+h-gcd));
}
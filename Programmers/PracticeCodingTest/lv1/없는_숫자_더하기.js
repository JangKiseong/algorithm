// 코딩테스트 연습 > 연습문제 > 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/86051

const solution = (numbers) => {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (numbers.indexOf(i) < 0) answer += i;
  }
  return answer;
};

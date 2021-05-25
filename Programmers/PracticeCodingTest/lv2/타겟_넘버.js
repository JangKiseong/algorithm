// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 타겟 넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
    let answer = 0;
  
    const dfs = (x, value) => {
      if (x < numbers.length) {
        dfs(x + 1, value + numbers[x]);
        dfs(x + 1, value - numbers[x]);
      } else {
        if (value === target) answer++;
      }
    }
  
    dfs(0, 0);
  
    return answer;
}
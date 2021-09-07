// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 네트워크
// https://programmers.co.kr/learn/courses/30/lessons/43162

const dfs = (arr, visited, computer) => {
    for (let i=0;i<arr.length;i++) {
        if (computer === i) continue;
        if (arr[computer][i] && !visited[i]) {
            visited[i] = true;
            dfs(arr, visited, i);
        }
    }
}

function solution(n, computers) {
    let count = 0;
    const visited = [];

    for (let i=0;i<n;i++) {
        if (visited[i]) continue;
        visited[i] = true;
        dfs(computers, visited, i);
        count++;
    }

    return count;
}
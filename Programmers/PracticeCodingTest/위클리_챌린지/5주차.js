// 코딩테스트 연습 > 위클리 챌린지 > 5주차
// https://programmers.co.kr/learn/courses/30/lessons/84512

const words = [];
const tempWord = [];
const dfs = (depth) => {
    if (depth === 5) return;
    for (let i=0;i<5;i++) {
        words[depth] = "AEIOU"[i];
        tempWord.push(words.join("").substring(0, depth+1));
        dfs(depth+1);
    }
}

dfs(0);

function solution(word) {
    let answer = 0;

    tempWord.forEach((element, index) => {
        if (element === word) answer = index+1;
    })

    return answer;
}
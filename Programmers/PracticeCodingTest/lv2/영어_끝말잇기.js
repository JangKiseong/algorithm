// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 영어 끝말잇기
// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    let index = 0;
    let personIndex = 0;
    let countWords = {};

    for(let i=0;i<n;i++){
        countWords[`${i}`] = 0;
    }

    countWords[words[0]] = 1;

    while(index !== words.length){
        countWords[`${personIndex % n}`] += 1;
        personIndex++;
        index++;
        if (index === words.length) break;

        const preWord = words[index-1];
        const postWord = words[index];

        if (preWord[preWord.length-1] !== postWord[0]){
            countWords[`${personIndex % n}`] += 1;
            break;
        }
        if (!countWords[postWord]) countWords[postWord] = 1;
        else {
            countWords[`${personIndex % n}`] += 1;
            break;
        }
    }
    
    if(index === words.length) return [0,0];
    else return [personIndex % n + 1, countWords[`${personIndex % n}`]];
}
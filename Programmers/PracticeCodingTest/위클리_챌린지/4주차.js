// 코딩테스트 연습 > 위클리 챌린지 > 4주차
// https://programmers.co.kr/learn/courses/30/lessons/84325

function solution(table, languages, preference){
    let answer = {
        title: "",
        score: 0
    };

    const scoreSet = {};

    languages.forEach((language, index) => {
        scoreSet[language] = preference[index];
    });

    table.forEach(job => {
        const rankedLanguage = job.split(" ");
        let score = 0;
        for (let i=1;i<6;i++) {
            if (scoreSet.hasOwnProperty(rankedLanguage[i])) {
                score += scoreSet[rankedLanguage[i]] * (6-i);
            }
        }

        if (score > answer.score) {
            answer.title = rankedLanguage[0];
            answer.score = score;
        }

        if (score === answer.score) {
            answer.title > rankedLanguage[0] ? answer.title = rankedLanguage[0] : null; 
        }
    });

    return answer.title;
}
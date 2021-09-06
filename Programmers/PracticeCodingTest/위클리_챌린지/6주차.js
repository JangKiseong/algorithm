// 코딩테스트 연습 > 위클리 챌린지 > 6주차
// https://programmers.co.kr/learn/courses/30/lessons/85002

function solution(weights, head2head) {
    let answer = [];

    weights.forEach((weight, boxer) => {
        const rate = head2head[boxer].replace(/N/g, "").length;
        const win = head2head[boxer].replace(/[^W]/g, "").length;
        let winRate = isNaN((win / rate)*100) ? 0 : ((win / rate)*100).toFixed(5);
        const fighter = {};
        fighter["weight"] = weight;
        fighter["winRate"] = winRate;
        fighter["overWeights"] = 0;
        fighter["boxer"] = boxer+1;

        weights.forEach((fWeight, opponent) => {
            if (boxer !== opponent && fWeight > weight && head2head[boxer][opponent] === "W") {
                fighter["overWeights"]++;
            }
        });

        answer.push(fighter);
    });

    answer.sort((pre, post) => {
        if (+pre.winRate > +post.winRate) {
            return -1;
        } else if(+pre.winRate < +post.winRate) {
            return 1;
        } else if (+pre.winRate === +post.winRate && +pre.overWeights > +post.overWeights) {
            return -1;
        } else if (+pre.winRate === +post.winRate && +pre.overWeights < +post.overWeights) {
            return 1;
        } else if (+pre.winRate === +post.winRate && +pre.overWeights === +post.overWeights && +pre.weight > +post.weight) {
            return -1;
        } else if (+pre.winRate === +post.winRate && +pre.overWeights === +post.overWeights && +pre.weight < +post.weight) {
            return 1;
        } else if (+pre.boxer > +post.boxer) {
            return 1;
        } else if (+pre.boxer < +post.boxer) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(answer)
    return answer.map(value => value.boxer);
}

console.log(solution([50,82,75,120], ["NLWN","WNLN","LWNN","NWLN"]));
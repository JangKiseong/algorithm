// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [1차] 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
    let answer = 0;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const preString = [];
    const postString = [];
    const intersection = [];
    for (let i=0;i<str1.length-1;i++) {
        let string = str1[i] + str1[i+1];
        string = string.replace(/[^a-z]/g, "");
        if (string.length === 2) {
            preString.push(string);
        }
    }

    for (let i=0;i<str2.length-1;i++) {
        let string = str2[i] + str2[i+1];
        string = string.replace(/[^a-z]/g, "");
        if (string.length === 2) {
            postString.push(string);
        }
    }

    if (!preString.length && !postString.length) return 65536;

    for (let i=0;i<preString.length;i++) {
        const index = postString.indexOf(preString[i]);
        if (index >= 0) {
            intersection.push(preString[i]);
            postString.splice(index,1)
            preString.splice(i,1);
            i--;
        }
        if (!preString.length) break;
    }
    const universalSet = [...preString, ...postString, ...intersection];

    return parseInt(intersection.length/universalSet.length*65536);
}
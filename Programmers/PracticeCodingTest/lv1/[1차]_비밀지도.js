// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [1차] 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    const answer = [];
    const answerMap = [];
    const firstMap = [];
    const secondMap = [];

    for(let i=0;i<n;i++){ 
        answerMap[i] = [];
        firstMap[i] = [];
        secondMap[i] = [];
    }

    arr1.forEach((element, index) => {
        const information = [...element.toString(2)].map(Number);

        if(information.length !== n){
            while(information.length < n) information.unshift(0);
        }
        firstMap[index] = [...information];
    })

    arr2.forEach((element, index) => {
        const information = [...element.toString(2)].map(Number);

        if(information.length !== n){
            while(information.length < n) information.unshift(0);
        }
        secondMap[index] = [...information];
    })

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(firstMap[i][j] || secondMap[i][j]) answerMap[i][j] = "#";
            else answerMap[i][j] = " ";
        }
    }

    answerMap.forEach(information => answer.push(information.join("")));

    return answer;
}
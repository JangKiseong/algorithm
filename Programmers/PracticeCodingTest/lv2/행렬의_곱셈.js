// 코딩테스트 연습 > 연습문제 > 행렬의 곱셈
// https://programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
    let answer = [];
    for (let i=0;i<arr1.length;i++) {
        answer[i] = new Array(arr2[0].length).fill(0);
    }
    arr1.forEach((array, index) => {
        for (let i=0;i<arr2[0].length;i++) {
            for (let j=0;j<arr2.length;j++) {
                answer[index][i] += array[j] * arr2[j][i];
            }
        }        
    })

    return answer;
}
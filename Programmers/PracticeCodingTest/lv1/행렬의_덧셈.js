// 코딩테스트 연습 > 연습문제 > 행렬의 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    arr1.forEach((array, index) => {
        array.forEach((value, idx) => {
            arr2[index][idx] += value;
        })
    })

    return arr2;
}
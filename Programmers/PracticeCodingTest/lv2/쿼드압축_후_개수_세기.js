// 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 쿼드압축 후 개수 세기
// https://programmers.co.kr/learn/courses/30/lessons/68936

const basket = [0, 0];

const completeCompressed = (arr, row, column, len) => {
    const number = arr[row][column];
    for (let i=0;i<len;i++) {
        for (let j=0;j<len;j++) {
            if(number !== arr[row+i][column+j]) return false;
        }
    }
    return true;
}

const divideAndConquer = (arr, row, column, len) => {
    if (!completeCompressed(arr, row, column, len)) {
        divideAndConquer(arr, row, column, len/2);
        divideAndConquer(arr, row+len/2, column+len/2, len/2);
        divideAndConquer(arr, row, column+len/2, len/2);
        divideAndConquer(arr, row+len/2, column, len/2);
    } else {
        basket[arr[row][column]]++;
    }
}

function solution(arr) {
    divideAndConquer(arr, 0, 0, arr.length);

    return basket;
}
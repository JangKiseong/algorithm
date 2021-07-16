// 코딩테스트 > 연습문제 > 최솟값 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
    let answer = 0;

    A = A.sort((pre, post) => pre - post);
    B = B.sort((pre, post) => pre - post);

    for (let i=0;i<A.length;i++) {
        answer += A[i] * B.pop();
    }

    return answer;
}
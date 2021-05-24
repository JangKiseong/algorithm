// 코딩테스트 연습 > 찾아라 프로그래밍 마에스터 > 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    let answer = new Set(nums).size;
    const numsLen = nums.length / 2; 
    answer > numsLen && (answer = numsLen);
    return answer;
}
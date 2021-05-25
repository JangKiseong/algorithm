// 코딩테스트 연습 > 해시 > 위장
// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    let answer = 1;
  
    let arrangeClothes = clothes.reduce((accu, curr) => {
        accu[curr[1]] = (accu[curr[1]] || 0) +1;
        return accu;
    }, {})
  
    Object.keys(arrangeClothes).forEach(cloth => {
        answer *= arrangeClothes[cloth] + 1
    })
  
    return answer-1;
}
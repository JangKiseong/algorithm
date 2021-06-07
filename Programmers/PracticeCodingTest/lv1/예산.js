// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    let answer = 0;
    let sumBudgets = 0;
    let count = 0;

    const sortDepartements = d.sort((pre, post) => pre - post);
    sortDepartements.forEach(departement => {
        sumBudgets += departement;
        count++;
        if(sumBudgets <= budget) answer = count;
    })
    return answer;
}
// 코딩테스트 연습 > 정렬 > 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {

    numbers.sort((pre, post) => pre-post);

    return numbers.sort((pre, post) => {
        if(pre < 10 && post < 10){
            return post - pre;
        } else if(pre >= 10 && post >= 10){

            const preNumDigit = pre.toString().length-1;
            const postNumDigit = post.toString().length-1;
            return post/10**postNumDigit - pre/10**preNumDigit;

        } else if(pre >= 10 && post < 10){

            const preNumDigit = pre.toString().length-1;
            return post - parseInt(pre/10**preNumDigit);

        } else if(post >= 10 && pre < 10) {

            const postNumDigit = post.toString().length-1;
            return parseInt(post/10**postNumDigit) - pre;
        }
    }).join("");
}

console.log(solution([3, 30, 34, 5, 9]))
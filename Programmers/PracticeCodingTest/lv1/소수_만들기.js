// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 소수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums){
    let answer = 0;

    const combination =(arr, num) => {
        const result = [];
        if(num === 1) return arr.map(e => [e]);
        
        arr.forEach((e,i,array) => {
            const rest = array.slice(i+1);
            const combinations = combination(rest,num-1);
            const combiArr = combinations.map(x => [e, ...x])
            result.push(...combiArr);
        }) 
        return result;
    }
    
    const isPrime = (number) => {
        if(number <= 1) return false;
        if(number === 2) return true;
        for(let i=2;i<=Math.ceil(Math.sqrt(number));i++){
            if(number % i === 0) return false;
        }
        return true;
    }

    let result = combination(nums, 3).map(array => {
        return array.reduce((sum, current) => {
            return sum + current;
        }, 0)
    })

    result = result.map(number => isPrime(number) && answer++)

    return answer;
}
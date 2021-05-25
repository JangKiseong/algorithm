// 코딩테스트 연습 > 완전탐색 > 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers){
    let answer = [];
    let result = [];
    let numsArr = numbers.split("");

    const permutation = (arr, selectNum) => {
        const permArr = [];
        if(selectNum === 1) return arr.map(v => [v]);
        
        arr.forEach((e, idx, arr) => {
            const restArr = arr.filter((_, index) => index !== idx);
            const permutationArr = permutation(restArr, selectNum - 1);
            const combineFixer = permutationArr.map(x => [e, ...x]);
            permArr.push(...combineFixer);
        });

        return permArr;
    }
    
    const isPrime = (number) => {
        if(number <= 1) return false;
        if(number === 2) return true;
        for(let i=2;i<=Math.ceil(Math.sqrt(number));i++){
            if(number % i === 0) return false;
        }
        return true;
    }

    numsArr.forEach((_, idx) => {
        result.push(permutation(numsArr, idx+1));
    })

    result.forEach(array => {
        array.forEach(element => {
            isPrime(parseInt(element.join(''))) && answer.push(parseInt(element.join('')));
        })
    })

    return [...new Set(answer)].length;
}
// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [1차] 캐시
// https://programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    if (cacheSize === 0) return cities.length*5;
    cities = cities.map(city=>city.toLowerCase());    
    cities.forEach(city => {
        if (cache.indexOf(city) < 0) {
            if (cache.length < cacheSize) {
                cache.push(city);
                answer += 5;
            } else {
                cache.shift();
                cache.push(city);
                answer += 5;
            }
        } else {
            cache.push(...cache.splice(cache.indexOf(city), 1));
            answer++;
        }
        console.log(cache)
    })
    return answer;
}
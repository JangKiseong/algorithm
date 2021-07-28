// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 방문 길이
// https://programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
    let answer = 0;
    const map = [];
    let location = [5, 5];

    dirs = [...dirs];

    dirs.forEach(command => {

        const preLocation = [location[0], location[1]];

        if (command === "U") location[1]--;
        else if (command === "D") location[1]++;
        else if (command === "R") location[0]++;
        else if (command === "L") location[0]--;

        if (location[0] < 0) location[0]++;
        else if (location[0] > 10) location[0]--;
        else if (location[1] < 0) location[1]++;
        else if (location[1] > 10) location[1]--;
        else {
            const xMovement = [preLocation[0], location[0]].sort((pre, post) => pre-post);
            const yMovement = [preLocation[1], location[1]].sort((pre, post) => pre-post)
            const movemonet = [...xMovement, ...yMovement].join("");

            if ([preLocation[0], preLocation[1]] !== [location[0], location[1]] && map.indexOf(movemonet) < 0) {
                map.push(movemonet);
                answer++;
            }
        }
    })

    return answer;
}
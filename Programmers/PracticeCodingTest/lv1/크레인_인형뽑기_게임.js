// 코딩테스트 연습 > 2019 카카오 개발자 겨울 인턴십 > 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves){
    let answer = 0;
    let tempArray = [];
    let stack = [];

    board.forEach((_, idx) => tempArray[idx] = []);
    board = board.reverse();

    board.forEach(frame => {
        frame.forEach((doll, idx) => {
            if(doll) tempArray[idx].push(doll);
        })
    })

    moves.forEach(move => {
        let doll = tempArray[move-1].pop();
        if(stack[stack.length-1] === doll && doll){
            stack.pop();
            answer += 2;
        } else if(doll) stack.push(doll);
    })

    return answer;
}
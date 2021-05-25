// 코딩테스트 연습 > 연습문제 > 가장 큰 정사각형 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
    if (!board) return 0;
  
    const width = board[0].length;
    const heigth = board.length;
    let answer = 0;
  
    if(width === 1){
        board.forEach(element => {
            if(element) answer = 1;
        })
    } else if(heigth === 1){
        board[0].forEach(element => {
            if(element) answer = 1;
        })
    } else {
        for (let i = 1; i < heigth; i++) {
            for (let j = 1; j < width; j++) {
                if (board[i][j] === 1) {
                    board[i][j] = Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
                    if (board[i][j] > answer) answer = board[i][j];
                }
            }
        }
    }
  
    return answer ** 2;
  }
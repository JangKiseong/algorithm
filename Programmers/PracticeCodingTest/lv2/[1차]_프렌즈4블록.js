// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [1차] 프렌즈4블록
// https://programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
    let answer = 0;
    board = board.map(chip => chip.split(""));
    const tempBoard = JSON.parse(JSON.stringify(board));

    while (true) {
        for (let i=0;i<m-1;i++) {
            for (let j=0;j<n-1;j++) {
                const chip = board[i][j];
                if (!chip) continue;
                if (board[i][j+1] === chip && board[i+1][j] === chip && board[i+1][j+1] === chip) {
                    tempBoard[i][j] = 0;
                    tempBoard[i][j+1] = 0;
                    tempBoard[i+1][j] = 0;
                    tempBoard[i+1][j+1] = 0;
                }
            }
        }
        for (let i=0;i<n;i++) {
            for (let j=1;j<m;j++) {
                if (tempBoard[j][i] === 0 && tempBoard[j-1][i]) {
                    const temp = tempBoard[j-1][i];
                    tempBoard[j-1][i] = 0;
                    tempBoard[j][i] = temp;
                    j = 0;
                }
            }
        }
        console.log(tempBoard)
        const flatBoard = board.flat().join("");
        const flatTempBoard = tempBoard.flat().join("");
        if (flatBoard === flatTempBoard) break;
        else board = JSON.parse(JSON.stringify(tempBoard));
    }
    return tempBoard.flat().join("").replace(/[A-Z]/g, "").length;
}
// 코딩테스트 연습 > 위클리 챌린지 > 3주차
// https://programmers.co.kr/learn/courses/30/lessons/84021

function solution(game_board, table) {
    let answer = 0;
    const spaces = [];
    const puzzles = [];

    for (let row=0;row<table.length;row++) {
        for (let column=0;column<table[row].length;column++) {
            if (!table[row][column]) table[row][column] = 1;
            else if (table[row][column]) table[row][column] = 0;
        }
    }

    for (let row=0;row<table.length;row++) {
        for (let column=0;column<table[0].length;column++) {
            if (game_board[row][column] === 0) {
                let space = [];
                dfs(game_board, column, row, space, 0);
                const capturedSpace = capture(game_board, space);
                spaces.push(capturedSpace);
            }
            if (table[row][column] === 0) {
                let puzzle = [];
                dfs(table, column, row, puzzle, 0);
                const capturedPuzzle = capture(table, puzzle);
                puzzles.push(capturedPuzzle);
            }
        }
    }

    const checkPuzzels = new Array(puzzles.length).fill(1);

    for (let i=0;i<spaces.length;i++) {
        for (let j=0;j<puzzles.length;j++) {
            let sameFlag = false;
            if (!checkPuzzels[j]) continue;
            for (let x=0;x<4;x++) {
                let isSame = true;
                if (spaces[i].length !== puzzles[j].length) {
                    puzzles[j] = rotate(puzzles[j]);
                    continue;
                }
                if (spaces[i][0].length !== puzzles[j][0].length) {
                    puzzles[j] = rotate(puzzles[j]);
                    continue;
                }
                for (let y=0;y<spaces[i].length;y++) {
                    for (let z=0;z<spaces[i][y].length;z++) {
                        if (spaces[i][y][z] !== puzzles[j][y][z]) {
                            isSame = false;
                        }
                    }
                }
                if (isSame) {
                    let flatSpaces = "";
                    for (let y=0;y<spaces[i].length;y++) {
                        flatSpaces += spaces[i][y].join("");
                    }
                    answer += flatSpaces.replace(/1/g, "").length;
                    sameFlag = true;
                    checkPuzzels[j] = 0;
                    break;
                } else {
                    puzzles[j] = rotate(puzzles[j]);
                }
            }
            if (sameFlag) break;
        }
    }
    return answer;
}

const dfs = (table, x, y, list, find) => {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const stack = [[x,y]];
    const len = table.length;
    list.push([y,x]);

    while (stack.length) {
        let [a, b] = stack.pop();
        let moveX, moveY;
        table[y][x] = 2;

        for (let i=0;i<4;i++) {
            moveX = a + dx[i];
            moveY = b + dy[i];
            if (moveX < 0 || moveX >= len) continue;
            if (moveY < 0 || moveY >= len) continue;
            if (table[moveY][moveX] === find) {
                table[moveY][moveX] = 2;
                stack.push([moveX, moveY]);
                list.push([moveY, moveX]);
            }
        }
    }
}

const capture = (game_board, list) => {
    const shape = [];
    let minRow = list[0][0];
    let minColumn = list[0][1];
    let maxRow = list[0][0];
    let maxColumn = list[0][1];

    for (let i=0;i<list.length;i++) {
        if (minRow > list[i][0]) minRow = list[i][0];
        if (minColumn > list[i][1]) minColumn = list[i][1];
        if (maxRow < list[i][0]) maxRow = list[i][0];
        if (maxColumn < list[i][1]) maxColumn = list[i][1];
    }
    for (let i=0;i<=maxRow-minRow;i++) {
        shape[i] = [];
    }
    for (let row=minRow;row<=maxRow;row++) {
        for (let column=minColumn;column<=maxColumn;column++) {
            shape[row-minRow][column-minColumn] = game_board[row][column];
        }
    }
    return shape;
}

const rotate = matrix => {
    let rotatedArray = [];

    for (let row=0;row<matrix[0].length;row++){
      rotatedArray.push([]); 
    }
    for (let column=0;column<matrix[0].length;column++){
      for (let row=0;row<matrix.length;row++){
          rotatedArray[column].push(matrix[row][column]) 
      } 
      rotatedArray[column].reverse(); 
    } 
    return rotatedArray;
}
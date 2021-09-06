// 코딩테스트 연습 > 찾아라 프로그래밍 마에스터 > 게임 맵 최단거리 
// https://programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
    const queue = [];
    const xLen = maps.length;
    const yLen = maps[0].lenght;
    const dx = [0,0,-1,1];
    const dy = [-1,1,0,0];
    let count = 1;
    let find = false;
    queue.push([0,0]);

    while (queue.length) {
        const size = queue.length;
        count++;
        for (let i=0;i<size;i++) {
            const [x, y] = queue.pop();
            for (let j=0;j<4;j++) {
                const nx = x + dx[j];
                const ny = y + dy[j];
                if (nx === xLen-1 && ny === yLen-1) {
                    find = true;
                    break;
                }
                if (nx < 0 || nx >= xLen) continue;
                if (ny < 0 || ny >= yLen) continue;

                if (maps[nx][ny]) {
                    queue.push([nx, ny]);
                    maps[nx][ny] = 0;
                }
            }
        }
        if(find) break;
    }

    return find ? count : -1;
}
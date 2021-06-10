// 코딩테스트 연습 > 연습문제 > 직사각형 별찍기
// https://programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i=0;i<b;i++){
        console.log("*".repeat(a));
    }
});
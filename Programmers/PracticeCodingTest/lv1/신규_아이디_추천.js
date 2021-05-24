// 코딩테스트 연습 > 2021 KAKAO BLIND RECRUITMENT > 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^\w-_.]/g,"");

    while(new_id.indexOf("..") >= 0){
        new_id = new_id.replace(/\.+/g, ".");
    }

    if(new_id[0] === ".") new_id = new_id.slice(1, new_id.length);
    if(new_id[new_id.length-1] === ".") new_id = new_id.slice(0, new_id.length-1);
    if(!new_id.length) new_id = "a";
    if(new_id.length >= 16){ 
        new_id = new_id.slice(0, 15);
        new_id[new_id.length-1] === "." && (new_id = new_id.slice(0, 14));
    }

    while(new_id.length <= 2){
        new_id += new_id[new_id.length-1];
    }

    return new_id;
}

// 좋은 코드 예시

const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')        
    return id.padEnd(3, id[id.length-1])
}
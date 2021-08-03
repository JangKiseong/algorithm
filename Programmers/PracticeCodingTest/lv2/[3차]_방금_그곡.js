// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [3차] 방금그곡
// https://programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
    let answer = [];
    let music = [];
    m = m.replace(/[A-Z]#/g, word => word[0].toLowerCase());
    
    musicinfos.forEach(information => {
        const info = information.split(",");
        const takingHour = +info[1].split(":")[0] - info[0].split(":")[0];
        const takingMinute = (+info[1].split(":")[1] - info[0].split(":")[1]) % 60;
        let runTime;
        let sound = info[3].replace(/[A-Z]#/g, word => word[0].toLowerCase());

        if (!takingHour) {
            runTime = takingMinute;
        } else {
            runTime = takingHour * 60 + takingMinute;
        }
        
        if (sound.length > runTime) {
            sound = sound.substring(0, runTime);
        } else {
            sound = sound.repeat(Math.ceil(runTime/sound.length));
            sound = sound.substring(0, runTime);
        }

        music.push({
            runTime: runTime,
            title: info[2],
            sound: sound
        });
    });

    music = music.sort((pre, post) => pre.runTime - post.runTime);

    music.forEach(info => {
        if (info.sound.indexOf(m) >= 0) {
            if (!answer.length) {
                answer.push(info);
            } else if (answer[answer.length-1].runTime !== info.runTime) {
                answer.push(info);
            }
        }
    });

    if (!answer.length) return "(None)"
    else return answer.pop().title;
}
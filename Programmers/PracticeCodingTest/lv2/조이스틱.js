// 코딩테스트 연습 > 탐욕법(Greedy) > 조이스틱
// https://programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
    let forwardAnswer = 0;
    let backwardAnswer = 0;
    let nameArray = [...name];
    let forwardLocation = 0;
    let backwardLocation = 0;
    const notAArray_F = nameArray.map(spell => {
        if(spell === 'A'){
            return 0;
        } else return 1;
    })

    const notAArray_B = nameArray.map(spell => {
        if(spell === 'A'){
            return 0;
        } else return 1;
    })

    const getShortSpellNum = spell => {
        const ASCII_SPELL = spell.charCodeAt(0) - 65;

        if(ASCII_SPELL > 13) return 26-ASCII_SPELL;
        else return ASCII_SPELL;
    }

    const getForwardDirection = index => {
        let forwardIndex = notAArray_F.indexOf(1) - index;
        let backwardLastIndex = (nameArray.length-notAArray_F.lastIndexOf(1)+index)%nameArray.length;
        if(forwardIndex < 0) forwardIndex = nameArray.length - (index - notAArray_F.indexOf(1));

        if(forwardIndex === backwardLastIndex) return 1;
        return forwardIndex >= backwardLastIndex ? -1 : 1;
    }

    const getBackwardDirection = index => {
        let forwardIndex = notAArray_B.indexOf(1) - index;
        let backwardLastIndex = (nameArray.length-notAArray_B.lastIndexOf(1)+index)%nameArray.length;
        if(forwardIndex < 0) forwardIndex = nameArray.length - (index - notAArray_B.indexOf(1));

        if(forwardIndex === backwardLastIndex) return -1;
        return forwardIndex >= backwardLastIndex ? -1 : 1;
    }

    for(let i=0;i<nameArray.length;i++){
        if(notAArray_F[forwardLocation] !== 0){
            forwardAnswer += getShortSpellNum(nameArray[forwardLocation]);
            notAArray_F[forwardLocation] = 0;
        }

        forwardLocation += getForwardDirection(forwardLocation);

        if(forwardLocation < 0) forwardLocation = nameArray.length-1;
        else if(forwardLocation === nameArray.length) forwardLocation = 0;

        const existSpell = notAArray_F.filter(element => element !== 0);
        if(!existSpell.length) break;
        else forwardAnswer++;
    }
    
    for(let i=0;i<nameArray.length;i++){
        if(notAArray_B[backwardLocation] !== 0){
            backwardAnswer += getShortSpellNum(nameArray[backwardLocation]);
            notAArray_B[backwardLocation] = 0;
        }

        backwardLocation += getBackwardDirection(backwardLocation);

        if(backwardLocation < 0) backwardLocation = nameArray.length-1;
        else if(backwardLocation === nameArray.length) backwardLocation = 0;

        const existSpell = notAArray_B.filter(element => element !== 0);
        if(!existSpell.length) break;
        else backwardAnswer++;
    }
    return Math.min(forwardAnswer, backwardAnswer);
}

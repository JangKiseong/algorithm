// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 스킬트리
// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
    let answer = 0;
    const skills = skill.split("");

    skill_trees.forEach(skillTree => {
        const skillTreeArray = skillTree.split("");
        const indexArray = [];

        for(let i=0;i<skills.length;i++){
            const skillIndex = skillTreeArray.indexOf(skills[i]);
            if(skillIndex >= 0) indexArray.push(skillIndex);
            else indexArray.push(27)
        }
        if(indexArray.length === 0){
            answer++;
        } else if(skills.length === 1 && indexArray.length === 1){
            answer++;
        } else if(indexArray.length === skills.length){
            let preIndex = 0;
            let postIndex = 1;
            while(true){
                if(indexArray[preIndex] <= indexArray[postIndex]){
                    preIndex++;
                    postIndex++;
                } else if(postIndex === indexArray.length){
                    answer++;
                    break;
                } else {
                    break;
                }
            }
        }
    })

    return answer;
}
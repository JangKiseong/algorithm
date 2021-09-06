// 코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT > [3차] 파일명 정렬
// https://programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
    return files.sort((pre, post) => {
        let tempPreHead = "";
        let tempPostHead = "";
        let tempPreNumber = "";
        let tempPostNumber = "";

        const preArray = pre.split("");
        const postArray = post.split("");

        for (let i=0;i<preArray.length;i++) {
            if (!isFinite(preArray[i]) || preArray[i] === ' ') {
                tempPreHead += preArray[i].toLowerCase();
            } else if (isFinite(preArray[i])) {
                for (let j=i;j<preArray.length;j++) {
                    if (tempPreNumber.length === 5) break;
                    if (isFinite(preArray[j])) {
                        tempPreNumber += preArray[j];
                    } else break;
                }
                break;
            }
        }

        for (let i=0;i<postArray.length;i++) {
            if (!isFinite(postArray[i]) || postArray[i] === ' ') {
                tempPostHead += postArray[i].toLowerCase();
            } else if (isFinite(postArray[i])) {
                for (let j=i;j<postArray.length;j++) {
                    if (tempPostNumber.length === 5) break;
                    if (isFinite(postArray[j])) {
                        tempPostNumber += postArray[j];
                    } else break;
                }
                break;
            }
        }

        tempPreNumber = parseInt(tempPreNumber);
        tempPostNumber = parseInt(tempPostNumber);

        if (tempPreHead > tempPostHead) {
            return 1;
        } else if (tempPostHead > tempPreHead) {
            return -1;
        } else if (tempPreHead === tempPostHead) {
            if (tempPreNumber > tempPostNumber) {
                return 1;
            } else if (tempPostNumber > tempPreNumber) {
                return -1;
            } else return 0;
        }
    });
}
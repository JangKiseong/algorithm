// 코딩테스트 연습 > 2020 카카오 인턴십 > 키패드 누르기
// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    let answer = '';
    let leftHandLocation = [3, 0];
    let rightHandLocation = [3, 2];

    const getLeftHandDistance = (numberLocation) => {
        return Math.abs(numberLocation[0]-leftHandLocation[0]) + Math.abs(numberLocation[1]-leftHandLocation[1]);
    }

    const getRightHandDistance = (numberLocation) => {
        return Math.abs(numberLocation[0]-rightHandLocation[0]) + Math.abs(numberLocation[1]-rightHandLocation[1]);
    }

    numbers.forEach(
        number => {
            if(number === 1 || number === 4 || number === 7){
                answer += 'L';
                number === 1 && (leftHandLocation = [0, 0]);
                number === 4 && (leftHandLocation = [1, 0]);
                number === 7 && (leftHandLocation = [2, 0]);
            } else if(number === 3 || number === 6 || number === 9){
                answer += 'R';
                number === 3 && (rightHandLocation = [0, 2]);
                number === 6 && (rightHandLocation = [1, 2]);
                number === 9 && (rightHandLocation = [2, 2]);
            } else {
                let numberLocation = [];
                number === 2 && (numberLocation = [0, 1]);
                number === 5 && (numberLocation = [1, 1]);
                number === 8 && (numberLocation = [2, 1]);
                number === 0 && (numberLocation = [3, 1]);
                const leftDistance = getLeftHandDistance(numberLocation);
                const rightDistance = getRightHandDistance(numberLocation);

                if(leftDistance > rightDistance){
                    answer += 'R';
                    rightHandLocation = numberLocation;
                } else if(leftDistance < rightDistance){
                    answer += 'L';
                    leftHandLocation = numberLocation;
                } else if(hand === "left"){
                    answer += 'L';
                    leftHandLocation = numberLocation;
                } else if(hand === "right") {
                    answer += 'R';
                    rightHandLocation = numberLocation;
                }
            }
        }
    );

    return answer;
}
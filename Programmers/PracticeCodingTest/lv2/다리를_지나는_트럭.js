// 코딩테스트 연습 > 스택/큐 > 다리를 지나는 트럭
// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridgeCurrentWeight = 0;
    let bridgeStates = [];
    let waitingTruck = truck_weights.shift();
  
    for(let i=0;i<bridge_length;i++){
      bridgeStates[i] = 0;
    }
  
    bridgeStates.unshift(waitingTruck);
    bridgeStates.pop();
    bridgeCurrentWeight += waitingTruck;
    answer++;
  
    while(bridgeCurrentWeight){
  
      bridgeCurrentWeight -= bridgeStates.pop();
      waitingTruck = truck_weights.shift();
  
      if(waitingTruck + bridgeCurrentWeight <= weight){
        bridgeStates.unshift(waitingTruck);
        bridgeCurrentWeight += waitingTruck;
      } else {
        bridgeStates.unshift(0);
        truck_weights.unshift(waitingTruck);
      }
      answer++;
    }
    
    return answer;
}
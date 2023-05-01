function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let weightOnBridge = 0; // 다리 위의 트럭의 무게
  let queue = []; // 지나가고 있는 트럭들의 큐

  while (truck_weights.length || queue.length) {
    if (queue[0] && queue[0].time === time) {
      // 나갈 시간이 된 트럭들을 큐에서 제거하고 무게를 업데이트
      const shift = queue.shift();
      weightOnBridge -= shift.weight;
    }

    // 무게 조건과 다리 길이의 조건을 모두 만족하는 경우를 계산
    const weightCondition = weightOnBridge + truck_weights[0] <= weight;
    const lengthCondition = queue.length < bridge_length;
    const condition = weightCondition && lengthCondition;

    if (condition) {
      // 조건에 만족하면 트럭이 다리에 올라감
      // 큐에 트럭을 추가하고 무게를 업데이트
      const shift = truck_weights.shift();
      const truck = { time: time + bridge_length, weight: shift };
      queue.push(truck);

      weightOnBridge += shift;
    } else {
      // 더 이상 트럭이 올라올 수 없는 경우
      // 큐의 맨 앞의 트럭이 나가야 하는 시간으로 이동
      // 반복문이 지날때마다 실행되는 time++ 때문에 -1을 해줌
      if (queue[0]) {
        time = queue[0].time - 1;
      }
    }

    time++;
  }

  return time;
}

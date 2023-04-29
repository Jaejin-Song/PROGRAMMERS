function solution(priorities, location) {
  const list = priorities.map((priority, index) => ({
    isLocation: index === location,
    priority: priority,
  }));

  let count = 0;
  while (list.length) {
    // 큐에서 대기중인 첫번째 프로세스 꺼내기
    const first = list.shift();

    // 우선순위가 더 높은 프로세스가 있다면
    // 프로세스를 다시 큐에 넣는다.
    if (list.some((el) => el.priority > first.priority)) {
      list.push(first);
    }
    // 우선순위가 가장 높은 프로세스라면
    // 해당 프로세스 실행
    // location 위치의 프로세스라면 count값을 return
    else {
      count++;
      if (first.isLocation) return count;
    }
  }
}

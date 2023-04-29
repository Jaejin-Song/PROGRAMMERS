function solution(progresses, speeds) {
  const answer = [];
  const restDays = [];

  for (let i = 0; i < progresses.length; i++) {
    const restDay = Math.ceil((100 - progresses[i]) / speeds[i]);
    restDays.push(restDay);
  }

  answer.push(1);
  let front = restDays[0];

  for (let i = 1; i < restDays.length; i++) {
    if (front >= restDays[i]) {
      answer[answer.length - 1] = answer[answer.length - 1] + 1;
      continue;
    }

    answer.push(1);
    front = restDays[i];
  }

  return answer;
}

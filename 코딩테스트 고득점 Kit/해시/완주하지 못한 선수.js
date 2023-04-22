function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (const i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

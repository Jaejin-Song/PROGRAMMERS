function solution(participant, completion) {
  const pMap = new Map();

  participant.forEach((p) => {
    pMap.set(p, pMap.has(p) ? pMap.get(p) + 1 : 1);
  });

  completion.forEach((c) => {
    pMap.set(c, pMap.get(c) - 1);
  });

  for (const [key, value] of pMap) {
    if (value === 1) return key;
  }
}

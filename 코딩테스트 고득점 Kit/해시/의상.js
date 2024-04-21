function solution(clothes) {
  const cMap = new Map();

  for (const [value, key] of clothes) {
    cMap.set(key, cMap.has(key) ? cMap.get(key) + 1 : 1);
  }

  const result =
    [...cMap.values()].reduce((total, cur) => total * (cur + 1), 1) - 1;

  return result;
}

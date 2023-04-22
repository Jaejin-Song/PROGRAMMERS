function solution(clothes) {
  const map = new Map();

  for (const [value, key] of clothes) {
    const isExist = map.get(key);
    map.set(key, isExist ? isExist + 1 : 1);
  }

  let answer = 1;
  for (const value of map.values()) {
    answer = answer * (value + 1);
  }

  return answer - 1;
}

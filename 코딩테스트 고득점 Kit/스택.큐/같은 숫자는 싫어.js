function solution(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.length === 0) {
      result.push(arr[i]);
      continue;
    }

    const lastValue = result[result.length - 1];

    if (lastValue !== arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

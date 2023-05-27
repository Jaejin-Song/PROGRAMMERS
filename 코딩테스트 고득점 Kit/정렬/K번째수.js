function solution(array, commands) {
  const answer = [];

  for (const [start, end, index] of commands) {
    const result = array
      .slice(start - 1, end)
      // compareFunction을 제공하지 않으면 문자열로 변환해서 비교하기 때문에
      // 숫자의 비교가 정상적으로 이루어지지 않음
      .sort((a, b) => a - b)[index - 1];

    answer.push(result);
  }

  return answer;
}

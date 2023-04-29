function solution(arr) {
  const answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const last = answer[answer.length - 1];

    if (arr[i] === last) continue;

    answer.push(arr[i]);
  }

  return answer;
}

// 참고할만한 방법
// 효율적이지는 않아서 배열의 크기가 작을때만 사용
function solution2(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

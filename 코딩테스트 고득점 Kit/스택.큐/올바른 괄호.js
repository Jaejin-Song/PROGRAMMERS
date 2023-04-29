function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const val = s[i];

    if (val === "(") {
      stack.push(val);
    } else {
      const last = stack[stack.length - 1];

      if (last === "(") stack.pop();
      else stack.push(val);
    }
  }

  const answer = stack.length ? false : true;

  return answer;
}

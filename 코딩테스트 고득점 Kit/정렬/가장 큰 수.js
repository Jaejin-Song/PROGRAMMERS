function solution(numbers) {
  const formatter = (num) => {
    return Number(num.toString()[0]);
  };

  const joinFormatter = (num1, num2) => {
    return Number([num1.toString(), num2.toString()].join(""));
  };

  const answer = numbers
    .sort((a, b) => {
      if (formatter(a) === formatter(b))
        return joinFormatter(b, a) - joinFormatter(a, b);
      else return formatter(b) - formatter(a);
    })
    .map((el) => el.toString())
    .join("")
    .replace(/(^0+)/, "");

  return answer === "" ? "0" : answer;
}

function betterSolution(numbers) {
  const answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");

  return answer[0] === "0" ? "0" : answer;
}

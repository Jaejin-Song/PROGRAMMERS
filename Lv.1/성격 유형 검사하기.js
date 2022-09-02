function solution(survey, choices) {
  let answer = "";
  let count = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((el, index) => {
    const score = choices[index];
    if (score <= 3) count[el[0]] += 4 - score;
    else if (score >= 5) {
      count[el[1]] += score - 4;
    }
  });

  if (count["R"] < count["T"]) answer += "T";
  else answer += "R";

  if (count["C"] < count["F"]) answer += "F";
  else answer += "C";

  if (count["J"] < count["M"]) answer += "M";
  else answer += "J";

  if (count["A"] < count["N"]) answer += "N";
  else answer += "A";

  return answer;
}

function betterSolution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => {
    type.split("").forEach((char) => (MBTI[char] = 0));
  });

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}

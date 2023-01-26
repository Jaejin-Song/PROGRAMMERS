function solution(today, terms, privacies) {
  const termObj = {};

  terms.forEach((el) => {
    const splited = el.split(" ");
    termObj[splited[0]] = Number(splited[1]);
  });

  const todayDay = Number(today.split(".")[2]);
  const todayMonth = Number(today.split(".")[1]);
  const todayYear = Number(today.split(".")[0]);

  const validArr = privacies.filter((el) => {
    let date = el.split(" ")[0];
    const key = el.split(" ")[1];

    let day = Number(date.split(".")[2]);
    let month = Number(date.split(".")[1]) + termObj[key];
    let year = Number(date.split(".")[0]);
    if (month > 12) {
      while (month > 12) {
        year += 1;
        month -= 12;
      }
    }

    if (year < todayYear) return true;

    if (year == todayYear && month < todayMonth) return true;

    if (year == todayYear && month == todayMonth && day <= todayDay)
      return true;
  });

  const answer = privacies
    .map((el, index) => {
      if (validArr.includes(el)) return index + 1;
      return 0;
    })
    .filter((el) => el);

  return answer;
}

function betterSolution(today, terms, privacies) {
  let answer = [];

  const termObj = {};
  terms.forEach((el) => {
    const [key, value] = el.split(" ");
    termObj[key] = Number(value);
  });

  const [todayYear, todayMonth, todayDay] = today.split(".").map(Number);
  const todayDate = todayYear * 12 * 28 + todayMonth * 28 + todayDay;

  privacies.forEach((el, index) => {
    let [collectedDay, term] = el.split(" ");
    const [year, month, day] = collectedDay.split(".").map(Number);

    const dates = year * 12 * 28 + month * 28 + day + termObj[term] * 28;

    if (dates <= todayDate) answer.push(index + 1);
  });

  return answer;
}

function solution(id_list, report, k) {
  const info = {};
  id_list.forEach((id) => {
    const userInit = {};
    userInit["report"] = [];
    userInit["reportedCount"] = 0;

    info[id] = userInit;
  });

  report.forEach((line) => {
    const reportData = line.split(" ");
    const reportUser = reportData[0];
    const reportedUser = reportData[1];

    if (!info[reportUser]["report"].find((user) => user == reportedUser)) {
      info[reportUser]["report"].push(reportedUser);
      info[reportedUser]["reportedCount"] += 1;
    }
  });

  const answer = [];
  id_list.forEach((id) => {
    let count = 0;
    info[id]["report"].forEach((user) => {
      if (info[user]["reportedCount"] >= k) count += 1;
    });
    answer.push(count);
  });
  return answer;
}

function bettorSolution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });

  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

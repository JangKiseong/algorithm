// 코딩테스트 연습 > 연습문제 > 신고 결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript
const solution = (id_list, report, k) => {
  const answer = [];
  const userInfo = {};
  const filteredReport = [...new Set(report)];
  id_list.forEach((user) => {
    userInfo[user] = {
      reportUser: [],
      reportedNum: 0,
    };
  });

  filteredReport.forEach((info) => {
    const [reporter, reportedUser] = info.split(" ");
    userInfo[reporter].reportUser.push(reportedUser);
    userInfo[reportedUser].reportedNum += 1;
  });

  Object.keys(userInfo).forEach((user) => {
    let mailNum = 0;
    userInfo[user].reportUser.forEach((reportedUser) => {
      userInfo[reportedUser].reportedNum >= k && (mailNum += 1);
    });
    answer.push(mailNum);
  });

  return answer;
};

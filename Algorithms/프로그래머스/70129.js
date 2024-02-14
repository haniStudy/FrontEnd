// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
    let answer = [0, 0];
    let len = 0;
    while (s.length > 1) {
      len = s.length;
      s = s.split("0").join("");
      answer[0]++;
      answer[1] += (len - s.length);
      s = s.length.toString(2);
    }
    return answer;
  }
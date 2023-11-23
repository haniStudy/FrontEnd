// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
    let answer = 0;
    let pre = s[0];
    for (char of s.split(" ")) {
        if (char !== "Z"){ // 숫자가 저장된 경우 더하기
            pre = Number(char);
            answer += pre; // 이전 값 저장
        }
        else answer -= pre; // Z가 저장된 경우 이전에 더한 값 빼기
    }
    return answer;
}
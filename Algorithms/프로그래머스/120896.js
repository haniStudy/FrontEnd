// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
    let answer = "";
    let temps = [];
    for (char of [...s]) {
        if (answer.indexOf(char) === -1) { // 중복되는 문자열이 없는 경우
            if (!temps.includes(char)) answer += char; // 이전에 중복된 내용이 없는 경우
        }
        else {
            answer = answer.replaceAll(char, ""); // 중복된 문자의 경우 제거
            temps.push(char); // 다음 중복에도 제거될 수 있도록 정보 저장
        }
    }
    return answer.split("").sort().join("");
}
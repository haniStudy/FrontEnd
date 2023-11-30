// https://school.programmers.co.kr/learn/courses/30/lessons/120907

// 1차
function solution(quiz) {
    let answer = [];
    for (q of quiz) {
        let temps = q.split("="); // = 기준으로 문자열 나누기
        
        let result = 0; // 결과 값 저장할 변수
        let operator = ""; // 연산자 저장할 변수
        for (t of temps[0].split(" ")) {
            if (/\d/.test(t)) { // 숫자인 경우
                let num = Number(t);
                result = operator === "-" ? result - num : result + num;
            } else operator = t;
        }
        if (result === Number(temps[1])) answer.push("O");
        else answer.push("X");
    }
    return answer;
}

// 2차
function solution(quiz) {
    let answer = [];
    for (q of quiz) {
        let [x, operator, y, , result] = q.split(" ");
        let temp = operator === "+" ? Number(x) + Number(y) : Number(x) - Number(y);
        answer.push(temp === Number(result) ? "O" : "X"); 
    }
    return answer;
}
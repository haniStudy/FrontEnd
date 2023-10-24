// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
    let answer = []; // 결과 값 담을 변수
    let temp = {}; // 문자의 인덱스를 저장할 객체 (key: 문자, value: 인덱스)
    for (let i=0; i<s.length; i++) {
        let key = s[i];

        // 이전에 동일한 문자가 있었는지 확인, 있다면 인덱스 사이의 값을 넣어줌
        if (temp.hasOwnProperty(key)) answer.push(i-temp[key]); 
        else answer.push(-1);
        temp[key] = i;
    }
    return answer;
}
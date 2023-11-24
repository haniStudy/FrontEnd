// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
    let answer = 0; // 결과 값 저장
    let operator = ""; // 연산자 저장
    for (temp of my_string.split(" ")){
        if (/\d+/.test(temp)) { // 정규표현식으로 숫자인지, 연산자인지 구분
            let num = Number(temp); // 문자를 숫자로 변경
            if (operator === "-") answer -= num; // 연산자 확인 후 진행
            else answer += num;
        } else {
            operator = temp; // 연산자인 경우 저장한 후 다음 숫자 나왔을 때 사용
        }
    }
    return answer;
}
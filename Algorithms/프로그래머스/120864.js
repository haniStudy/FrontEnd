// https://school.programmers.co.kr/learn/courses/30/lessons/120864
function solution(my_string) {
    let answer = 0; // 결과 값 저장
    const reg = /[a-zA-Z]/gi; // 정규 표현식으로 알파벳 찾기
    let str = my_string.replaceAll(reg, " ").split(" "); // 알바펫을 " "으로 변경 후 " " 기준으로 새로운 배열 생성
    for (let i of str) {
        if (Number(i)) answer += parseInt(i); // 합 구하기
    }
    return answer;
}
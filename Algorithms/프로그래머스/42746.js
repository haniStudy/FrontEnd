// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
    // 1. 배열 요소를 모두 string으로 변경
    // 2. sort 메서드를 사용해 a+b와 b+a를 비교하여 더 큰 값이 앞으로 오도록 함. (숫자형으로 변경)
    let answer = numbers.map((n) => n.toString()).sort((a, b) => Number(b + a) - Number(a + b)).join("");
    return answer[0]==="0" ? "0" : answer; // 테스트 케이스 중 0으로만 이루어진 경우가 있어 확인 필요
}
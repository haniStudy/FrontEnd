// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
    let answer = 1; // 결과 값 저장할 변수
    if (n >= 3628800) answer = 10; // 최대인 경우 반복문을 돌리지 않기 위해 조건문 설정
    else {
        let f = 1; // 이전 결과 값 저장할 변수
        // 이전에 구한 값이 n보다 작을 때까지만 반복
        while (f*answer < n) f *= ++answer;
    }
    return answer;
}
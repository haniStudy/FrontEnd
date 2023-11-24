// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
    let result = [];
    let divisor = 2; // 소인수분해 되는 가장 작은 값 저장
  
    while (n >= 2) { // 2일 때가 가장 작은 수, 그 전까지만 반복문 진행
        if (n % divisor === 0) { // 소인수분해 되는 값이 있는 경우
            result.push(divisor)
            n = n / divisor; // 모든 배수를 제거하여 소인수만 남을 수 있도록 함
        }
        else divisor ++; // divisor 값 증가
    }
    return [...new Set(result)];
}
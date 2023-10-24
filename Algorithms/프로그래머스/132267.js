// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
    let temp = n; // 가지고 있는 병의 개수
    let answer = 0; // 결과 값 저장할 변수
    while(temp >= a){ // 가지고 있는 병의 개수가 더 많을 때까지 진행
        answer += parseInt(temp / a) * b; // 몇 병 먹었는지 저장
        temp = parseInt(temp / a) * b + (temp % a); // 몇 병 남았는지 저장
    }
    return answer;
}
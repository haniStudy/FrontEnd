// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    citations.sort((a, b) => b - a); // 큰 순으로 정렬
    let h = 0; // 인용 횟수 저장
    while (h + 1 <= citations[h]) { // 피인용수가 논문수보다 작을 때 까지만 반복
        h++; // 피인용수 증가
    }
    return h;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
    let answer = 0; // 결과 값 저장할 변수
    score.sort((a, b) => b-a); // 오름차순 정렬
    for (let i = 0; i < score.length; i += m) {
        let temp = score.slice(i, i + m); // 주어진 사과 개수만큼 잘라서 새로운 배열 완성
        if (temp.length < m) continue; // 사과 개수 미만인 경우 for문 종료
        answer += Math.min(...temp) * m;
    }
    return answer;
}
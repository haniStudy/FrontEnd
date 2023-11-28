// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
    let answer = []; // 결과 값 저장
    let average = score.map((a) => {return (a[0] + a[1]) / 2}); // 평균 구하기
    let temps = [...average]; // 임시로 평균 값 저장
    average.sort((a, b) => b-a); // 평균 값을 큰 순으로 정리
    for (t of temps) {
        // 등수를 구하기 위해 평균 순서대로 정렬한 average에서 index 값으로 등수를 구함
        answer.push(average.indexOf(t) + 1);
    }
    return answer;
}
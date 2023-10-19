// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
    let answer = 0; // 결과 값을 저장할 변수
    let len = p.length; // 비교할 p의 값의 길이

    // i는 t의 인덱스 시작 값을 의미
    // i의 값은 t의 길이가 p의 길이보다 작거나 같을 때까지 커짐
    for (let i=0; i <= t.length-len; i++) {
        let temp = t.slice(i, len+i);
        if (Number(temp) <= p) answer++; // p의 길이보다 작은 경우
    }
    return answer;
}
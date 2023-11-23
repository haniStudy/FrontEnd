// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
    let answer = [];
    let temps = [...emergency]; // 이전 정보를 저장
    emergency.sort((a, b) => b-a); // 큰 수부터 정렬
    for(let i=0; i<emergency.length; i++) {
        let index = emergency.indexOf(temps[i]);
        answer.push(index + 1);
    }
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
    let answer = 0; // 결과 값 저장할 변수
    let len = number.length; // 배열의 길이 저장
    for (let i=0; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            for(let k=j+1; k<len; k++) {
                if (number[i] + number[j] + number[k] === 0) answer++;
            }
        }
    }
    return answer;
}
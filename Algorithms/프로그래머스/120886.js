// https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
    let answer = 1; // 기본 값으로 만들 수 있다고 설정
    
    let temps = before.split(""); // 배열로 변환
    for(a of after) {
        let index = temps.indexOf(a); // 일치하는 알파벳이 있으면 index 값 가져옴
        if (index === -1) { // 없다면 answer 값 0으로 바꾸고, for문 종료
            answer = 0;
            break;
        } else temps.splice(index, 1); // 있다면 배열에서 제거
    }
    return answer;
}
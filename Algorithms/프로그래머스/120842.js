// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
    let answer = []; // 결과 값 저장할 변수
    while(true) {
        answer.push(num_list.splice(0, n)); // n 만큼 잘라서 넣기
        if  (num_list.length <= 0) break; // 배열이 빈 경우 종료
    }
    return answer;
}
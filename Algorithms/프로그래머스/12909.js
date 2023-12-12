// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
    let answer = true; // 정답 저장 변수
    let [open, end] = [0, 0]; // open: (, end: )의 개수를 의미
    for(char of s){
        if(char === "(")open += 1; // (인 경우 open 값 증가
        else {
            end += 1; // )인 경우 end 값 증가
            if (open < end) { // end의 개수가 open 보다 크다면 실패, 즉시 종료
                answer = false;
                break;
            }
        }
    }
    if (open !== end)  answer = false; // 개수가 같지 않다면 실패

    return answer;
}
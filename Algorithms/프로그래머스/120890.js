// https://school.programmers.co.kr/learn/courses/30/lessons/120890
function solution(array, n) {
    let answer = 0; // 결과 값 저장할 변수
    let pre = 101; // n은 100보다 같거나 작은 수
    for (let i=0; i<array.length; i++) {
        let temp1 = array[i];
        let result = Math.abs(temp1 - n); // 숫자 사이의 값 정수로 만들기
        if ((result < pre) || (result === pre && temp1 < answer)) { // 사이 간격이 제일 낮은 값 찾기
            pre = result;
            answer = temp1;
        }
    }
    return answer;
}
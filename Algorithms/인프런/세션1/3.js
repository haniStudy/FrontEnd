// 문제: 연필 1 다스는 12자루입니다. 
// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

function solution(n){
    let answer;
    answer=Math.ceil(n/12);
    return answer;
}

console.log(solution(178));

// Math.ceil() 함수는 주어진 숫자를 올림하여 가장 가까운 정수를 반환


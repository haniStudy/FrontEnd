// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
    let result = 0; // 결과 값 저장
    while(chicken >= 10){ // 남은 치킨수가 10이하일 때까지 반복
    	result += Math.floor(chicken / 10); // 10으로 나눈 몫을 더함
        chicken = chicken % 10 + Math.floor(chicken / 10); // 남은 치킨 수 저장
    }
    return result;
}
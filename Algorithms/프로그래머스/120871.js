// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
    let result = 0; // 결과 값 저장
    
    for(let i = 1 ; i <= n ; i ++) { // n까지 반복
        result++ // i에 증가에 따른 x3의 증가
        
        // 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복
        while(result.toString().includes('3') || result%3 === 0) {
            result++
        }
    }
    return result;
}
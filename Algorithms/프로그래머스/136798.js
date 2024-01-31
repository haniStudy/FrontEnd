// https://school.programmers.co.kr/learn/courses/30/lessons/136798

// 1차 (시간 초과)_약수 구하는 for문 때문에 시간 초과
function solution(number, limit, power) {    
    let answer = 0;
    for(let i=1; i<=number; i++){
        let cnt = 0;
        for(let j=1; j <= i; j++){
            if(i % j === 0) cnt += 1;
        }    
        if(cnt > limit) cnt = power;
        answer += cnt;
    }
    
    return answer;
}

// 2차 (성공)
function solution(number, limit, power) {    
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        let cnt = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (Math.pow(j, 2) === i) cnt += 1;
                else cnt += 2;
            }
        }     
        if (cnt > limit) cnt = power;
        answer += cnt;
    }
    
    return answer;
}
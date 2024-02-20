// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {    
    const results = Array(n + 1).fill(0);
    results[1] = 1;
    results[2] = 2;
    for (let i = 3; i <= n; i++) {
        results[i] = (results[i - 2] + results[i - 1]) % 1234567;
    }
    return results[n];
}
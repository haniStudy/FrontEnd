// https://school.programmers.co.kr/learn/courses/30/lessons/12973

// 1차 (시간 초과)
function solution(s){
    let answer = 0;
    let i = 0;
    let temps = [...s];
    while(i < temps.length){
        if(i < temps.length && (temps[i] === temps[i+1])) {
            temps.splice(i, 2);
            i = 0;
        } else {
            i++;
        }
        if(temps.length === 0) answer = 1;
    }
    return answer;
}

// 2차_스택 자료구조 사용
function solution(s){
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        if(!stack.length || stack[stack.length - 1] !== s[i]) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }

    return !stack.length ? 1 : 0;
}
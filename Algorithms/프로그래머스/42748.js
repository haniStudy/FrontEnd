// https://school.programmers.co.kr/learn/courses/30/lessons/42748

// 1차
function solution(array, commands) {
    let result = []; // 결과 값 저장할 변수
    for (let i=0; i<commands.length; i++) {
        let data = commands[i]; // 여러번 접근하기 위해 변수에 값 할당
        let temps = array.slice(data[0]-1, data[1]).sort((a, b) => a-b); // 주어진 길이의 배열 생성 후 정렬
        result.push(temps[data[2]-1]);
    }
    return result;
}

// 2차
function solution(array, commands) {
    let answer = []; // 결과 값 저장할 변수
    for (c of commands) {
        let [i, j, k] = c; // 구조분해 할당
        const temps = array.slice(i-1, j).sort((a,b)=>a-b); // 주어진 길이의 배열 생성 후 정렬
        answer.push(temps[k-1]);
    }
    return answer;
}
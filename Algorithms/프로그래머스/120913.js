// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
    let answer = [];
    for (let i=0; i<my_str.length; i+=n) {
        answer.push(my_str.slice(i, i+n)); // 주어진 길이만큼 잘라서 원소로 생성
    }
    return answer;
}
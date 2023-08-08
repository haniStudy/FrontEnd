// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    let temps = s.split(" ");

    return `${Math.min(...temps)} ${Math.max(...temps)}`;
}
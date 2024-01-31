// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    let answer = [];
    for (var i = 3; i <= (brown  +yellow) / i; i++) {
        var x = Math.floor((brown + yellow) / i);
        if((x - 2)*(i - 2) === yellow) {
            answer = [x, i];
            break;
        }
    }
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
    let temps = {}; // 임시로 값을 저장
    for (num of numlist) {
        let key = Math.abs(n-num); // 숫자 사이의 차이 값을 키로 사용
        if (key in temps) temps[key].push(num);
        else temps[key] = [num];
    }

    // 정렬된 키를 사용하여 값을 넣어줌
    let answer = [];
    Object.keys(temps).sort((a, b) => a - b).forEach(key => {
        answer = answer.concat(temps[key].sort((a, b) => b - a));
    });

    return answer;
}
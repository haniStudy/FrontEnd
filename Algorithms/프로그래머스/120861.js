// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
    let answer = [0, 0]; // 결과 값 저장할 변수
    let xRange = Math.round(board[0] / 2) - 1; // x축 최대 및 최솟값
    let yRange = Math.round(board[1] / 2) - 1; // y축 최대 및 최솟값
    for (key of keyinput) { 
        let x = answer[0]; // x축 값 저장
        let y = answer[1]; // y축 값 저장
        if (key === "up" && y < yRange) answer[1] += 1; // key가 up이고, y축 값이 최대보다 작을 때까지만 +1
        else if (key === "down" && y > -yRange) answer[1] -= 1; // key가 down이고, y축 값이 최소보다 클 때까지만 -1
        else if (key === "right" && x < xRange) answer[0] += 1; // key가 right이고, x축 값이 최대보다 클 때까지만 +1
        else if (key === "left" && x > -xRange) answer[0] -= 1; // key가 left이고, x축 값이 최소보다 클 때까지만 -1
    }
    return answer;
}
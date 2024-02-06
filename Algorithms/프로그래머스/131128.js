// https://school.programmers.co.kr/learn/courses/30/lessons/131128

// 1차 (시간초과)
function solution(X, Y) {
    let result = [];
    for(xdata of X){
        if(![...Y].includes(xdata)) continue;
        Y = Y.replace(xdata, "");
        result.push(xdata);
    }
    result.sort((a, b)=>b-a);
    return result.length === 0 ? "-1" : `${Number(result.join(""))}`;
}

// 2차
function solution(X, Y) {
    // 초기화
    const answer = [];
    const numberX = new Array(10).fill(0);
    const numberY = new Array(10).fill(0);

    // 숫자별 보유 개수파악
    X.split('').forEach(n => numberX[n]++);
    Y.split('').forEach(n => numberY[n]++);

    // 최대공통개수 파악 후, 해당 개수만큼 숫자 확보
    for (let i = 0; i < 10; i++) {
        const m = Math.min(numberX[i], numberY[i]);
        for (let j = 0; j < m; j++) {
            answer.push(i)
        }
    }

    // 짝꿍숫자 추출 후 예외처리 및 형변환
    let mateNum = answer.sort((a, b) => b - a);
    if (mateNum.length == 0) mateNum = [-1];
    else if (mateNum[0] == 0) mateNum = [0];
    return String(mateNum.join(""))
}
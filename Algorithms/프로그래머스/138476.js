// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
    const tDict = {};
    tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1)); // 중복 값 개수 계산

    const tArr = Object.values(tDict).sort((a, b) => b - a); // 중복 값 개수로 내림차순 정렬
    let cnt = 0;
    for (t of tArr) {
        cnt++;
        if (k > t) k -= t;
        else break;
    }
    return cnt;
}
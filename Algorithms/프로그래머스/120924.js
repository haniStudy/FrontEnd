// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
    let answer = 0; // 정답 저장할 변수
    if (common[2] - common[1] === common[1] - common[0]) { // 등차수열인 경우
        answer = common[common.length - 1] + (common[1] - common[0]);
    } else { // 등비수열인 경우
        answer = common[common.length - 1] * (common[1] / common[0])
    }
    return answer;
}
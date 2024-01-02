// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    let answer = 1; // 결과 값 저장할 변수
    let obj = {};
    for(let i = 0; i<clothes.length; i++){
        // 의상 종류를 키로 개수 저장
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }

    for(let key in obj){
        answer *= obj[key]; // 중복 값 개수를 누적으로 곱하기
    }
    return answer - 1; // 모든 옷을 입지 않는 경우 제외하기 위해 -1
}
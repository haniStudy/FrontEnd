// https://school.programmers.co.kr/learn/courses/30/lessons/12941

// 1차_채점에서 실패
// 원인: sort()는 유니코드 기준 정렬, 두 자리수 이상일 때 콜백함수가 없으면 제대로 정렬 되지 않는다.
function solution(A,B){
    let answer = 0;

    A.sort();
    B.sort((a, b)=>b - a);
    for(let i=0; i<A.length; i++){
        answer += (A[i] * B[i]);
    }
    
    return answer;
}

// 2차_성공
function solution(A,B){
    let answer = 0;

    A.sort((a, b)=>a- b);
    B.sort((a, b)=>b - a);
    
    for(let i=0; i<A.length; i++){
        answer += (A[i] * B[i]);
    }
    
    return answer;
}
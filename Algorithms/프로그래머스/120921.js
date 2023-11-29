function solution(A, B) {
    let answer = 0; // 결과 값 저장 (이미 같은 문자열일 경우로 초기화)
    if (A !== B) { // A와 B가 다른 문자열인 경우에만 아래 코드 실행
        let isOk = false; // 일치하는 문장 만들었는지 유무 저장
        let count = 0; // 몇 번 이동했는지 저장
        for (let i=A.length-1; i>=0; i--) { // 뒤에부터 하나씩 이동
            let temp = A.slice(i) + A.slice(0, i); // 문자열 조함
            count += 1; // 횟수 증가
            if (temp === B) { // 문자열이 일치하는 경우
                answer = count;
                isOk = true;
                break;
            }     
        }
        if (!isOk) answer = -1; // 일치하는 문자열을 못만드는 경우 -1 반환
    }
    return answer;
}
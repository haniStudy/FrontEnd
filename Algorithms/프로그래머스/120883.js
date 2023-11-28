// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
    let answer = "fail"; // 기본으로 실패 설정

    // 한번만 접근하기 위해 미리 변수에 저장 (for문 안에서 접근하면 반복할 때마다 접근하기 때문)
    let id = id_pw[0]; // id 저장 
    let pw = id_pw[1]; // pw 저장
    for (info of db) {
        if (!info.includes(id)) continue; // id 있으면 pw 확인, 없으면 다음 값 확인
        if (!info.includes(pw)) { // pw가 일치하지 않으면 결과 메시지 변경 및 다음 값 확인
            answer = "wrong pw";
            continue;
        }
        answer = "login"; // id, pw 모두 일치
    }
    return answer;
}
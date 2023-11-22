// https://school.programmers.co.kr/learn/courses/30/lessons/120887
function solution(i, j, k) {
    let answer = 0; // 결과 값 저장
    let temps = Array.from({length: j-i+1}, (v, g)=>g+i); // 주어진 숫자 범위로 이루어진 배열 생성
    const reg = new RegExp(k.toString(), 'g'); // 정규 표현식 생성
    for (t of temps) {
        const count = t.toString().match(reg); // 일치하는 값 있는지 확인, 있으면 배열로 생성
        if (!count) continue;
        answer += count.length;
    }
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
    let answer = 2; // 기본으로 없다는 걸 전재로 함
    for (word of dic) { // 단어만큼 반복
        let isOk = false; // 단어 완성 유무 관리
        let temps = [...spell];
        for (w of word) {
            let index = temps.indexOf(w);
            if (index === -1) break;
            temps.splice(index, 1); // 존재하는 알파벳인 경우 배열에서 삭제
            if (temps.length === 0) { // 배열에 알파벳이 없는 경우 단어 완성을 의미
                isOk = true;
                answer = 1;
            }
        }
        if (isOk) break;
    }
    return answer;
}
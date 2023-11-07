// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
    let answer = []; // 결과 값 저장할 배열
    for (let i=0; i<photo.length; i++) {
        let temp = photo[i];
        let result = 0; // 점수 저장
        for (let j=0; j<temp.length; j++) {
            let index = name.indexOf(temp[j]); // 일치하는 이름의 index 찾기
            if (index === -1) continue; // 일치하는 이름이 없다면 넘어가기
            result += yearning[index]; // 일치하는 이름이 있는 경우 점수 더하기
        }
        answer.push(result);
    }
    return answer;
}
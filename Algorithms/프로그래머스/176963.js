// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
    let answer = []; // 결과 값 저장할 변수
    
    for (let i=0; i<photo.length; i++) {
        let temp = photo[i];
        let result = 0;
        for (let j=0; j<temp.length; j++) {
            let index = name.indexOf(temp[j]);
            if (index === -1) continue;
            result += yearning[index];
        }
        answer.push(result);
    }
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    // 패턴 저장
    let pattern1 = [1, 2, 3, 4, 5];
    let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let temps = [0, 0, 0];
    for (let i=0; i<answers.length; i++) {
        if (pattern1[i%5] === answers[i]) temps[0]++; // 패턴 1 확인
        if (pattern2[i%8] === answers[i]) temps[1]++; // 패턴 2 확인
        if (pattern3[i%10] === answers[i]) temps[2]++; // 패턴 3 확인
    }
    
    let result = []; // 결과 값 저장할 변수
    let index = 0; // index 관리할 변수
    let maxVal = Math.max(...temps); // 최대 값 구하기
    for (let i=0; i<3; i++) {
        if (temps[i] === maxVal){
            result[index] = i+1;
            index++;
        }
    }
    
    return result;
}
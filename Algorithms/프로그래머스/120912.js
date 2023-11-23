// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
    let answer = 0;
    for (a of array) {
        let results = a.toString().match(/7/g); // 정규 표현식 사용하여 7의 개수만큼 원소 만들기
        // 7이 존재하는 경우 7의 개수만큼의 배열이 생성되기 때문에 해당 배열 길이 값을 더함
        if (results) answer += results.length;
    }
    return answer;
}
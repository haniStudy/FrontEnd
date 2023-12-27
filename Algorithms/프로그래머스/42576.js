// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 1차
function solution(participant, completion) {
    let answer = '';

    completion[completion.length] = '';
    var arr1 = participant.sort();
    var arr2 = completion.sort();
    
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
             answer = arr1[i];
        }
    }
    return answer;
}

// 2차
// 시간 초과 발생, for문 안에서 indexOf, splice를 반복하여 성능 문제 발생했던 것으로 추정
function solution(participant, completion) {
    let temp = participant.filter((p) => {
        let index = completion.indexOf(p); // 배열에 원하는 원소의 index가 있는지 찾기
        if (index !== -1) completion.splice(index, 1); // 해당 원소가 있다면 제거
        return index === -1;
    })
    return temp[0];
}
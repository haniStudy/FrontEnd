// https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 1차
function solution(arr)
{   
    let results = []; // 결과 값 저장할 변수

    // for문 사용하여 index로 배열의 요소에 접근
    for (let i=0; i<arr.length; i++) {
        let num = arr[i];
    
        // i의 값이 0인 경우, 앞에 비교할 값 없음
        if (i === 0) results.push(num)

        // i의 값이 0 이상인 경우, 앞의 비교 값 있음
        else if (arr[i-1] !== arr[i]) results.push(num)
    }
    return results;
}

// 2차
function solution(arr){
    let results = [];
    for (a of arr) {
        if (a === results[results.length - 1]) continue;
        results.push(a);
    }
    return results;
}
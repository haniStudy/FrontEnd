function solution(numbers, k) {
    let answer = 0; // 결과 값 저장
    let len = numbers.length; // 배열 길이 저장
    let j = 0; // 배열 index 관리
    for (let i=0; i<k; i++){
        // 현재 index 값이 배열의 길이 보다 크거나 같은 경우 다시 앞으로 돌아감
        if ( j >= len ) j = Math.abs(len - j);
        answer = numbers[j];
        j += 2;
    }
    return answer;
}
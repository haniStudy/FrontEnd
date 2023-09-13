// 문제: 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

function solution(arr){
    let sum = 0;
    let min;
    for (let i=0; i<arr.length; i++) {
        let temp = arr[i];
        if (temp === 1) {
            sum += temp;
            min = temp;
        }
        
        if (temp % 2 !== 0) {
            sum += temp;

            // 최솟값 구하기
            if (min === undefined) min = temp;
            else if (temp < min) min = temp;
        }
    }
    
    return [sum, min];
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
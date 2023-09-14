// 문제: 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution(arr){         
    let answer, min = Number.MAX_SAFE_INTEGER;
    
    min = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }

    return min;
}

// let arr=[5, 7, 1, 3, 2, 9, 11];
let arr =[5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
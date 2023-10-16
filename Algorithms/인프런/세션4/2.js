// 문제: N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 
// 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

function isPrime(num){ // 소수인지 아닌지 판별하는 함수
    if(num === 1)  return false; // 1은 소수가 아니기 때문
    for(let i = 2; i <= parseInt(Math.sqrt(num)); i++){
        if(num % i === 0) return false; // num을 i로 나눈 나머지가 0이면 소수가 아님
    }
    return true;
}

function solution(arr){
    let answer=[];
    for(let x of arr){
        let res = 0;
        while(x){
            let t = x % 10; // 현재 숫자의 일의 자리를 추출
            res = res * 10 + t; // res에 일의 자리 숫자를 추가하여 숫자를 뒤집음
            x = parseInt(x/10); // 일의 자리를 제거한 후 정수로 바꿈
        }
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
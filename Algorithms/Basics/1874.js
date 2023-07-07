// https://www.acmicpc.net/problem/1874
// 참고 사이트: https://velog.io/@rkio/%EB%B0%B1%EC%A4%80-Javascript-1874

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));
const len = input.shift();
let stack = [];
let results = [];

let stackNum = 1;
for(let i = 0; i < len; i++){
    let num = input[i];
    
    while(stackNum <= num){
        stack.push(stackNum);
        stackNum++;
        results.push("+");
    }

    let stackPop = stack.pop();
    results.push("-");
    
    if(stackPop !== num){
        results = ["NO"];
        break;
    }   
}

console.log(results.join("\n"));
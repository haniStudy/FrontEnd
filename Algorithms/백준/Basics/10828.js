// https://www.acmicpc.net/problem/10828

const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const stack = [];
const results = [];
const len = array.shift();
for (let i = 0; i < len; i++) {  
    let condition = array[i];
    if (condition === 'pop') results.push(stack.pop() || -1);
    
    else if (condition === 'size') results.push(stack.length);

    else if (condition === 'empty') results.push(stack[0] ? 0 : 1);

    else if (condition === 'top') results.push(stack[stack.length - 1] || -1);
    
    else stack.push(array[i].split(" ")[1]);
}

console.log(results.join('\n'));
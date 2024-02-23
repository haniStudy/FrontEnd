// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
    const stack = [];
    let result = 0;
    if (s.length % 2 === 1) return 0;

    for (let i = 0; i < s.length; i++){
        let candidate = s.slice(i) + s.slice(0, i);
        let isRight = true;
        for (word of candidate) {
            if (word === "(" || word === "{" || word === "[") stack.push(word);
            else {
                let leftWord = stack.pop();
                if (word === ")" && leftWord === "(") continue;
                if (word === "}" && leftWord === "{") continue;
                if (word === "]" && leftWord === "[") continue;
                isRight = false;
                break;
            }
        }
        if (isRight) result++;
    }
    return result;
}
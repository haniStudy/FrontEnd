// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
    let answer = "";
    let reversed = "";
    for(let i = 1; i < food.length; i++){
        for(let j = 0; j < Math.floor(food[i]/2); j++){
            answer = answer.concat(i.toString());
        }
    }
    
    reversed = answer.split("").reverse().join(""); // 반전
    answer = answer + "0" + reversed;
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
    let answer = 0;
    for(let i=0; i < ingredient.length; i++){
        if(ingredient.slice(i, i+4).join("") === "1231"){
            answer++;
            ingredient.splice(i, 4);
            i-=3;
        }
    }
    return answer;
}
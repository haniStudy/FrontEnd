// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    people.sort((a, b)=>b - a);
    
    let cnt = 0;
    let len = people.length;
    for(let i = 0; i < len; i++){
        if(people[i] + people[len-1] <= limit){
            len--;
        }
        cnt++;
    }
    return cnt;
}
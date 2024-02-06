// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
    let answer = "";
    
    let eList = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
    for(char of s){
        let i = eList.indexOf(char);
        let cnt = index;
        while(cnt > 0){
            i += 1;
            if(i >= eList.length) i = eList.length - i;
            if(!skip.includes(eList[i])) cnt--;
        }
        answer += eList[i];
    }
    return answer;
}
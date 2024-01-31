// https://school.programmers.co.kr/learn/courses/30/lessons/138477

// 1차
function solution(k, score) {
    let answer = [];
    
    let pres = [];
    for(s of score){
        pres.push(s);
        pres.sort((a, b) => b - a);
        
        let num = s;
        for(let i=0; i<k; i++){
            if(pres.length < i + 1) break;
            num = pres[i];
        }
        answer.push(num);
    }
    
    return answer;
}

// 2차
function solution(k, score) {
    let answer = [];
    let pres = [];
    
    for(let i=0; i<score.length; i++){
        pres.push(score[i]);
        pres.sort((a, b)=>b-a);
        
        if(pres.length >= k) answer.push(pres[k-1]);
        else answer.push(pres[pres.length-1]);
    }
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
    let answer = [0, 0];
    
    let cnt = 1;
    let i = 1;
    let pres = [];
    let preWord = "";
    for(w of words){
        // 중복되는 단어인지 확인
        if(pres.includes(w)){
            answer[0] = i;
            break;
        }  
        
        // 이전 단어와 이어지는지 확인
        if(preWord !== "" && w[0] !== preWord){
            answer[0] = i;
            break;
        }
        
        preWord = w[w.length - 1];
        pres.push(w);
        if(i === n) {
            i = 1;
            cnt++;
        }
        else i++;
    }

    if(cnt !== 0 && answer[0] !== 0) answer[1] = cnt;

    return answer;
}
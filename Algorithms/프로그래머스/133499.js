// https://school.programmers.co.kr/learn/courses/30/lessons/133499

// 1차 (1개 실패)
function solution(babbling) {
    let answer = 0;
    
    let words = ["aya", "ye", "woo", "ma"];
    for(b of babbling){
        let temp = b;
        for(w of words){
            temp = temp.replace(w, ".");
        }
        temp = temp.replaceAll(".", "");
        if (temp === "") answer += 1;
    }

    
    return answer;
}
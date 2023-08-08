// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12951

// 최종 제출
function solution(s) {
    let temps = s.toLowerCase().split(" ");
    let result = temps.map(word => word.replace(/^[a-z]/, word.charAt(0).toUpperCase())).join(' ');
    return result;
}


// 런타임 에러
function solution(s) {
    let temps = s.split(" ");
    
    for (let i=0; i<temps.length; i++) {
        let temp = temps[i].toLowerCase();
        let t = temp[0]; 
        temps[i] = temp.replace(t, t.toUpperCase(), 1);
    }
    
    return temps.join(" ");
}
// 문제: N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

function solution(s){  
    let answer="", max=s[0].length;
    for (let i=0; i<s.length; i++) {
        let temp = s[i];
        if (max < temp.length) {
            answer = temp;
            max = temp.length;
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
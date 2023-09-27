// 문제: 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 
// 단 반복횟수가 1인 경우 생략합니다.

function solution(s){
    let answer = "";
    let n = 1;
    for (let i=0; i<s.length; i++) {
        let temp = s[i];
        if (i===0) answer += temp;
        else if (s[i-1] === temp) n++;
        else {
            if (n > 0) {
                answer += n;
                n = 1;
            }
            answer += temp;
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));
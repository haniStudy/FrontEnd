// 문제: 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요. 
// 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(s){  
    let answer;
    let len = s.length;
    let index = Math.floor(len/2);
    if (len % 2 === 0) answer = s.slice(index-1, index+1);
    else answer = s[index];
    return answer;
}
// console.log(solution("good"));
console.log(solution("study"));
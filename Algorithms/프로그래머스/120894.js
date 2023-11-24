// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
    let answer = ""; // 결과 값 저장
    let english = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (e of english) {  
        if (!numbers.includes(e)) continue; // 배열 내 존재하는지 확인

        // 해당하는 문자열 숫자로 변경하기 (숫자는 index 값과 일치)
        numbers = numbers.replaceAll(e, english.indexOf(e).toString());
    }
    return Number(numbers);
}
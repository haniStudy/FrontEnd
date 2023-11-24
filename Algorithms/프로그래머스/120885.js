// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {

    // parseInt: 2진수를 10진수로 변경
    let result = parseInt(bin1, 2) + parseInt(bin2, 2);
    return result.toString(2); // 10진수를 2진수로 변경
}
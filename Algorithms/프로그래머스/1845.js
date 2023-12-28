// https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 1차
function solution(nums) {
    let temp = [...new Set(nums)]; // 중복 제거
    let len = nums.length / 2; // 전체 길이를 2로 나눈 후 저장
    let templen = temp.length; // 중복 제거된 배열의 길이를 저장
    // 중복 제거된 배열의 길이가 원본 배열보다 크다면 전체 길이를 나눈 값 리턴, 아니면 중복 제거된 배열의 길이 리턴
    return templen > len ? len : templen;
}
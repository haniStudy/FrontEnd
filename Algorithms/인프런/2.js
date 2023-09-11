// 문제: 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

function solution(a, b, c){
    let answer="YES", max;
    let temps = [a, b, c].sort((a, b) => a - b); // 작은 순서로 정렬
    if (temps[0] + temps[1] < temps[2]) answer = "NO";

    // if (!(a + b > c && a + c > b && b + c > a)) answer = "NO";
    return answer;
}
// console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
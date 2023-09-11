// 문제: 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)

function solution(a, b, c){
    let answer = a; // 결과 값 담을 변수
    let temps = [b, c];
    for (let i=0; i<temps.length; i++){
        if (temps[i] < answer) answer = temps[i];
    }
    return answer; // 리턴 값
}

console.log(solution(2, 5, 1));
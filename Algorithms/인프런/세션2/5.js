// 문제: N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

function solution(arr){  
    let answer = [];
    let temps = [...arr].sort((a, b)=>b-a);

    for (let i=0; i<temps.length; i++) {
        let index = arr.indexOf(temps[i]);
        answer += index + 1 + " ";
    }
    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));
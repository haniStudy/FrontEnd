// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
    let temps = [];  // 임시로 값을 담을 변수
    // for문을 이용해서 배열의 요소에 접근
    for (let i=0; i<progresses.length; i++) {
        let num = progresses[i]; // 중복으로 접근하고 있어서 변수에 저장
        let count = 0;           // 요소가 100로가 넘으려면 몇 번 더해져야 하는지 저장
        while (num < 100) {      // num 값이 100 이하일 때까지만 아래 코드 진행
            num += speeds[i];
            count++;
        }
        temps.push(count);
    }
    
    let results = [];           // 결과를 저장할 변수
    let standardNum = temps[0]; // 앞에 과정이 끝나야 다음 과정 진행할 수 있기 때문에 기본으로 0번째 값 저장
    for(let i = 0, j = 0; i< temps.length; i++){
        let num = temps[i];
        if ( i === 0 ){                     // i의 값이 0이면 비교할 필요 x, 무조건 1증가
            results[j] = 1;
        } else if (num <= standardNum) {    // 현재 확인한 요소의 값이 이전 값 보다 작거나 같으면 값 증가
            results[j] += 1;
        } else {                            // 요소의 값이 큰 경우, 비교해야 할 값 변경 및 results 변수에 완료된 횟수 기본 값 넣어줌
            standardNum = num;
            results[++j] = 1;
        }
    }
    return results;
}
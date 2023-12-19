// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

// 1차
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

// 2차
function solution(progresses, speeds) {
    let answer = [];
    while(speeds.length > 0){ // 원소가 모두 제거되면 반복문 종료
        for(s in speeds){ // for ~ in 구문 사용하여 인덱스 가져와 일치하는 인덱스에 위치한 요소 값 더해줌
            progresses[s] += speeds[s];
        }
        
        let count = 0; 
        while(progresses[0] >= 100) { // 첫 번째 값이 100보다 클 때 까지만 반복
            progresses.shift(); // 첫 번째 값이 100 보다 크면 제거
            speeds.shift(); // 위와 동일
            count++; // 카운터 증가
        }
        if(count > 0) answer.push(count);
    }
    return answer;
}
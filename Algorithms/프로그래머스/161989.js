// https://school.programmers.co.kr/learn/courses/30/lessons/161989

// 1차_실패
function solution(n, m, section) {
    let answer = 0;
    let temps = [...section];
    for(let i=0; i < section.length; i++){
        answer++;
        
        let num = section[i];
        let nums = Array.from({length: (num + m) - num}, (_, index) => index + num);
        for(n of nums){
            let index = temps.indexOf(n);
            if(index === -1) continue;
            temps.splice(index, 1);
        }
        
        if(temps.length === 0) break;
    }   
    return answer;
}

// 2차_성공
function solution(n, m, section) {
    let answer = 0;
    const nums = Array.from({length: n}, (_, i) => i + 1); // 0부터 n까지 숫자로 이루어진 배열

    section.forEach((v) => {
        nums[nums.indexOf(v)] = 0; // 색칠이 필요한 인덱스 변수에 0 삽입
    });

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            for (let j = i; j < nums.length && j < i + m; j++) {
                nums[j] += 1; // 색깔 칠해진 곳 1로 변경
            }
            answer += 1; // 횟수 증가
        } else {
            continue;
        }
    }
    return answer;
}
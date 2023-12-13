// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    // map 사용하여 객체 생성 {isOk: 찾고자 하는 인덱스와 일치하는지 유무, num: 값}
    let temps = priorities.map((p, i)=>({
        isOk: i === location,
        num: p
    }));
    
    let count = 0; // 횟수 저장할 변수
    while(true){
        let obj = temps.splice(0,1)[0]; // 앞에서 

        // 최대값이 아닌 경우 다시 배열에 넣어줌
        if(temps.some(t=> t.num > obj.num )){
            temps.push(obj);                        
        }
        else{ // 최대값인 경우
            count += 1; // 횟수 증가
            if(obj.isOk) return count; // 내가 찾던 인덱스면 종료
        }
    }
}
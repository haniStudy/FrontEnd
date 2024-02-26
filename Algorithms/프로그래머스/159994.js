// https://school.programmers.co.kr/learn/courses/30/lessons/159994

// 2차_성공
function solution(cards1, cards2, goal) {
    for (g of goal) {
        if (g === cards1[0]) {
            cards1.shift();
        } else if (g === cards2[0]) {
            cards2.shift();
        } else {
            return "No";
        }
    }
    
    return "Yes";
}

// 1차 (실패_특정 케이스 실패)
function solution(cards1, cards2, goal) {
    let answer = "Yes";
    
    let i = 0;
    let j = 0;
    for (let k=0; k<goal.length; k++) {
        let g = goal[k];
        let isOk = true;
        // cards1 확인
        let index = cards1.indexOf(g);
        if (index >= 0) {
            if (index >= i) i = index;
            else isOk = false;
        }
        
        // cards2 확인
        if (!isOk) {
            index = cards2.indexOf(g);
            if (index >= 0 && index >= j) {
                isOk = true;
                j = index;
            } else isOk = false;
        }
        
        if (!isOk) {
            answer = "No";
            break;
        }
    } 
    return answer;
}
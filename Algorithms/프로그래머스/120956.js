// https://school.programmers.co.kr/learn/courses/30/lessons/120956

// 내 풀이
function solution(babbling) {
    let answer = 0;
    let pronunciation = ["aya", "ye", "woo", "ma"];
    for (b of babbling) {
        let index = pronunciation.indexOf(b);
        if (index !== -1) answer += 1
        else {
            let temp = b;
            for (reg of pronunciation) {
                const regex = new RegExp(reg, 'g');
                const matches = temp.match(regex);
                if (matches === null) continue;
                let i = temp.indexOf(reg);
                temp = temp.replace(matches[0], ".");
            }
            temp = temp.replaceAll(".", "");
            if (temp === "") answer += 1;
        }
    }
    
    return answer;
}

// 다른 사람 풀이
function solution(babbling) {
    let answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(word => {
        if (regex.test(word)) answer++;  
    })

    return answer;
}
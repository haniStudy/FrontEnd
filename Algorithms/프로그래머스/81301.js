// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    let word = {"zero":"0", "one":"1", "two":"2", 
               "three":"3", "four":"4", "five":"5",
                "six":"6", "seven":"7", "eight":"8",
                "nine":"9"
               };
    
    let result = s;
    for (key of Object.keys(word)) {
        if (result.includes(key)) {
            let re = new RegExp(key, "gi");
            result = result.replace(re, word[key]);
            //result = result.replaceAll(key, word[key]);
        }
    }

    return Number(result);
}
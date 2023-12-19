// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
    const arr = polynomial.split(' + ');
    
    const x = arr
        .filter(v=>v.includes('x'))
        .map(v=>parseInt(v.replace('x', '')) || 1)
        .reduce((a, c)=>a+c,0);
    
    const y = arr
        .filter(v=>!v.includes('x'))
        .reduce((a, c)=>a+parseInt(c),0);
    
    const answer = [];
    x && answer.push(x === 1 ? 'x' : `${x}x`);
    y && answer.push(y);
    
    return answer.join(' + ');
}
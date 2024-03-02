// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
    let [sx, sy] = [0, 0], [ex, ey] = [0, 0], isFind = false;  
    wallpaper.forEach((v, i)=>{
        [...v].forEach((w, j)=>{
            if (w === "#") {
                if (!isFind) {
                    sx = i;
                    sy = j;
                    ex = i+1;
                    ey = j+1;
                    isFind = true;
                } else{
                    sx = Math.min(sx, i);
                    sy = Math.min(sy, j);
                    ex = Math.max(ex, i+1);
                    ey = Math.max(ey, j+1);   
                }
            }
        })
    })
    return [sx, sy, ex, ey];
}
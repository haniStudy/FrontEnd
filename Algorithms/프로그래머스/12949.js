// https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
    var answer = [];
    var row1 = arr1.length;
    var col1 = arr1[0].length;
    var col2 = arr2[0].length;

    for(var s=0; s<row1; s++){
    	answer.push([]);
        for(var x=0; x<col2; x++){
            answer[s].push(0);
        }
    }
  
    for(var i=0; i<row1; i++) { 
        for(var j=0; j<col2; j++) { 
            for(var k=0; k<col1; k++) { 
                answer[i][j] = answer[i][j] + arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}

// 다른 사람 풀이
function solution(arr1, arr2) {
    return Array(arr1.length).fill()
      .map((r, i) => Array(arr2[0].length).fill()
           .map((v, j) => arr1[i].reduce((a, c, k) => a + c * arr2[k][j], 0)))
}
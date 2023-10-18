## Promise
- 콜백 지옥에서 빠져나올 수 있는 방법

### 비동기 작업 상태 종류
- Pending: 대기
- Fulfilled: 이행
- Rejected: 실패

```
function isPositive(number) {
    const executor = (resolve, reject) => {
        setTimeout(()=>{
            if (typeof number === "number") {
                resolve(number > 0 ? "양수" : "음수");
            } else {
                reject("숫자가 아닙니다.");
            }
        }, 2000);
    };

    // 객체 생성, 선언된 순간 바로 실행됨!
    const asyncTask = new Promise(executor);
    return asyncTask; 
}

// 성공
const res = isPositive(101);
res.then((res)=>{
    console.log("성공", res); // Fulfilled: 이행
}.catch((err)=>{
    console.log("실패", err); // Rejected: 실패
}));

// 실패
const res = isPositive("1");
res.then((res)=>{
    console.log("성공", res);
}.catch((err)=>{
    console.log("실패", err);
}));

```

### 콜백 지옥에서 벗어나자!
```
function taskA(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const res = a + b;
        }, 2000);
    })
}

function taskB(b) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const res = b * 2;
        }, 1000);
    })
}

function taskC(c) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const res = c * -1;
        }, 3000);
    })
}

// 콜백 해결 이후
taskA.then(5, 1).then((a_res)=>{
    console.log("a의 결과: ", a_res);
    return taskB(a_res);
}).then((b_res)=>{ // taskA의 return 값 (promise 객체)
    console.log("b의 결과: ", b_res);
    return taskC(b_res);
}).then((c_res)=>{
    console.log("c의 결과: ", c_res);
});

// 콜백 해결 이전
taskA(3, 4, (a_res)=>{
    console.log("a의 결과: ", a_res);
    taskB(a_res, (b_res)=>{
        console.log("b의 결과: ", b_res);
        taskC(b_res, (c_res)=>{
            console.log("c의 결과: ", c_res);
        })
    }) 
})
```
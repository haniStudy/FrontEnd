## async & await
- Promise를 더 쉽게 사용할 수 있게 도와줌
- Promise의 단점을 보안하여 코드를 훨씬 직관적으로 나타낼 수 있게 함

### async
- async를 붙이면 Promise를 반환, 그래서 Promise와 같이 then 메소드 사용 가능
```
async function testAsync() {
    return "hello";
}

testAsync().then((res)=>{
    console.log(res); // 출력: hello
});

```

### await
- 비동기 함수가 동기적인 것 처럼 작동
- 해당 코드가 실행되기 전까지 절대 다름 함수를 실행하지 않음
- async가 붙은 함수에서만 await 사용 가능 
```
function delay(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
}

async function testAsync() {
    // await 사용 전
    <!-- return delay(3000).then(()=>{
        return "hello";
    }); -->

    // await 사용 후
    await delay(3000);
    return "hello";
}

testAsync().then((res)=>{
    console.log(res); // 출력: hello
});
```
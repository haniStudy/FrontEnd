# Async/Await와 Promise
## 질문
Async/Await와 Promise의 차이 

## 답변
Async/Await와 Promise 모두 비동기 작업을 다루는 방법이지만 여러 차이점이 존재합니다. 
우선 Promise는 콜백을 사용하는 방식으로 처리, Async/Await는 함수 내부에서 await를 사용하여 기다리는 방식으로 처리합니다.

또 Promise를 사용하면 .catch()문으로 에러 핸들링이 가능한데, Async/Await는 에러 핸들링 기능이 없어 try-catch()문을 활용해야 합니다.

마지막으로는 Promise는 .then() 지옥의 가능성이 있어서 코드가 길어질수록 Async/Await가 코드 가독성이 좋습니다.

* * *
## Async/Await
- ES8에서 도입된 비동기 작업을 다루는 문법적인 개선
- Async 함수는 항상 Promise를 반환하며, 내부에서 비동기 작업을 동적으로 처리할 수 있도록 도와줌
- Async 함수 내에서 Await 키워드를 사용하여 Promise의 결과를 기다리면서 코드를 작성할 수 있음
- 비동기 코드를 동기적인 스타일로 작성할 수 있어서 가독성이 높아지며, 예외 처리도 try-catch문으로 처리할 수 있음.

## Promise
- ES6에서 도입된 비동기 작업을 다루기 위한 객체
- 비동기 작업을 처리하는데 사용되며, 콜백 헬을 피하고 가독성을 높여주는 패턴
- 세가지 상태를 가질 수 있음
> 대기 (pending): 비동기 작업이 아직 완료되지 않은 상태
> 이행 (fullfiled): 비동기 작업이 성공적으로 완료된 상태
> 거부 (rejected): 비동기 작업이 실패한 상태
## 함수형 컴포넌트를 사용하는 이유
- 클래스형 컴포넌트의 경우 코드 길이기 길고, 중복 코드 발생 등의 문제 발생

## useEffect
- 컴포넌트가 렌더링 될 때다 특정 작업을 실행할 수 있도록 하는 hook

```
    // 마운트 되었을 때만 실행하고 싶은 경우
    useEffect(()=>{
        console.log("mount!");
    }, []);

    // 상태가 변경될 때마다 실행하고 싶은 경우
    useEffect(()=>{
        console.log("update");
    });

    // 의존성 배열의 값이 변경된 경우에만 실행하고 싶은 경우
    useEffect(()=>{
        console.log(`count is update: ${count}`);
    }, [count]);
```

## Memoization
- 이미 계산한 결과를 기억했다가 동일한 계산을 시키면 다시 연산하지 않고 기억했던 데이터를 반환 시키게 하는 방법

## useMemo
- 성능 최적화를 위해 사용
- 컴포넌트가 리렌더링 될 때 불필요한 재계산을 방지할 수 있음
- 값을 반환해주기는 것을 잊지말기
```
    const getDiaryAnalyis = useMemo(() => {
        console.log("일기 분석 시작");

        const goodCount = datas.filter((d)=>d.emotion >= 3).length;
        const badCount = datas.length - goodCount;
        const goodRatio = (goodCount / datas.length) * 100;
        return {goodCount, badCount, goodRatio};
    }, [datas.length]);

    const {goodCount, badCount, goodRatio} = getDiaryAnalyis;
```

## React.memo
- 고차 컴포넌트: 매개변수로 컴포넌트를 넣어주면 새로운 컴포넌트를 반환
- 동일한 props로 동일한 결과를 렌더링하는 경우 이전 렌더링 결과를 재사용 함! -> 리렌더링하지 않겠다는 의미
- 변수가 객체인 경우 얕은 비교(주소에 의한 비교)를 해서 해당 고차 컴포넌트로 비교 불가 (같은 객체를 가르키게 하면 비교 가능)

```
import React, { useEffect, useState } from "react";

    const CountView = React.memo(({count}) => {
        useEffect(()=>{
            console.log(`count: ${count}`);
        })
        return <div>{count}</div>;
    });

    const TextView = React.memo(({text}) => {
        useEffect(()=>{
            console.log(`text: ${text}`);
        })
        return <div>{text}</div>
    });

    const OptimizeTest = () => {
        const [count, setCount] = useState(1);
        const [text, setText] = useState("");

        return <div style={{padding: 50}}>
            <div>
                <h2>count</h2>
                <CountView count={count}/>
                <button onClick={()=> setCount(count+1)}>+</button>
            </div>
            <div>
                <h2>text</h2>
                <TextView text={text}/>
                <input value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
        </div>
    }

export default OptimizeTest;
```

## useCallback
- 리렌더링 최적화 하는데 사용되는 hook
- 메모이제이션된 콜백을 반환

```
    const onCreate = useCallback((author, content, emotion) => { // 일기 추가
            const created_date = new Date().getTime(); // 현재 시간
            const newData = {
                author,
                content,
                emotion,
                created_date, 
                id: dataId.current,
            };
            dataId.current++;
            setDatas((data)=>[newData, ...data]); // 기존 리스트에 새로운 값 추가
        }, []);
```
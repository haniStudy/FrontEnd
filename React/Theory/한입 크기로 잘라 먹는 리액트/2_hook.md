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
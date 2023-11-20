## Context
- 데이터를 더 쉽게 공유할 수 있게 해줌
- 리액트의 경우 단방향으로 데이터가 전달되기 때문에 Prop drilling이 발생할 수 있음 -> 이 기능을 사용해 제거 가능!

```
    export const DiaryStateContext = React.createContext(); // 변수

    export const DiaryDispatchContext = React.createContext(); // 함수
    const memoizedDispatchs = useMemo(()=>{
        return {onCreate, onRemove, onEdit};
    }, []);


    // 생략
    return (
        <DiaryStateContext.Provider value={datas}>
            <DiaryDispatchContext.Provider value={memoizedDispatchs}>
                {/* <Lifecycle /> */}
                {/* <OptimizeTest /> */}
                <DiaryEdit/>
                    <div>전체 일기 : {datas.length}</div>
                    <div>기분 좋은 일기 개수 : {goodCount}</div>
                    <div>기분 나쁜 일기 개수 : {badCount}</div>
                    <div>기분 좋은 일기 비율 : {goodRatio}</div>
                <DiaryList dList={datas}/>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );

    // 변수
    const dList = useContext(DiaryStateContext);

    // 함수
    const {onCreate} = useContext(DiaryDispatchContext);

```
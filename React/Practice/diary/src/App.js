import React, { useCallback, useEffect, useMemo, useRef, useState, useReducer } from "react";

import './App.css';
import DiaryEdit from "./DiaryEdit";
import DiaryList from "./DiaryList";
// import OptimizeTest from "./OptimizeTest";

const reducer = (state, action) => {
    switch(action.type) {
        case "INIT": {
            return action.data; // 새로운 state return
        }
        case "CREATE": {
            const created_date = new Date().getTime();
            const newItem = {
                ...action.data,
                created_date
            }
            return [newItem, ...state];
        }
        case "REMOVE": {
            return state.filter((it) => it.id !== action.targetId);
        }
        case "EDIT": {
            return state.map((it)=>it.id === action.targetId ? {...it, content: action.newContent} : it);
        }
        default:
            return state;
    }
};

// context 선언
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
// export
// 파일에서 여러 번 사용 가능
// 이름을 바꿔서 import 불가능 (비구조화 할당을 사용해야 함)

// export default
// 파일 당 하나만 사용 가능
// 이름을 바꿔서 import 가능

function App() {
    // const [datas, setDatas] = useState([]);
    const [datas, dispatch] = useReducer(reducer, []);

    // 비동기 함수로 만들기
    const getData = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res)=>res.json());

        const initData = res.slice(0, 20).map((it)=>{
            return {
                author: it.email,
                content: it.body,
                emotion: Math.floor(Math.random() * 5) + 1, // 0~4까지의 숫자를 랜덤으로 생성해서 +1
                created_date: new Date().getTime(),
                id: dataId.current++,
            }
        });
        // setDatas(initData);
        dispatch({type: "INIT", data: initData});
    };

    // 컴포넌트가 마운트 되는 시점에 실행
    useEffect(()=>{
        getData();
    }, []);

    const dataId = useRef(0);
    const onCreate = useCallback((author, content, emotion) => { // 일기 추가        
        // const created_date = new Date().getTime(); // 현재 시간
        // const newData = {
        //     author,
        //     content,
        //     emotion,
        //     created_date, 
        //     id: dataId.current,
        // };
        // setDatas((data)=>[newData, ...data]); // 기존 리스트에 새로운 값 추가

        dispatch({type: "CREATE", data: {author, content, emotion, id: dataId.current}});
        dataId.current++;
    }, []);

    const onRemove = useCallback(
        (targetId) => { // 일기 삭제
            console.log(`${targetId}가 삭제되었습니다.`);
            // setDatas(data => data.filter((d)=> d.id !== targetId));
            dispatch({type: "REMOVE", targetId});
        }, []);

    const onEdit = useCallback(
        (targetId, newContent) => { // 일기 수정
            // setDatas(data => data.map((d)=>d.id === targetId ? {...d, content: newContent}: d));
            dispatch({type: "EDIT", targetId, newContent});
    }, []);
    
    // useMemo를 사용하여 앱 컴포넌트가 리렌더링 될 때 재생성되지 않도록 함.
    const memoizedDispatchs = useMemo(()=>{
        return {onCreate, onRemove, onEdit};
    }, []);

    // 연산 최적화
    const getDiaryAnalyis = useMemo(() => {
        const goodCount = datas.filter((d)=>d.emotion >= 3).length;
        const badCount = datas.length - goodCount;
        const goodRatio = (goodCount / datas.length) * 100;
        return {goodCount, badCount, goodRatio};
    }, [datas.length]);

    const {goodCount, badCount, goodRatio} = getDiaryAnalyis;

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
}

export default App;
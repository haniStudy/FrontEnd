import { useEffect, useRef, useState } from "react";

import './App.css';
import DiaryEdit from "./DiaryEdit";
import DiaryList from "./DiaryList";

function App() {
    const [datas, setDatas] = useState([]);

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
        setDatas(initData);
    };

    // 컴포넌트가 마운트 되는 시점에 실행
    useEffect(()=>{
        getData();
    }, []);

    const dataId = useRef(0);
    const onCreate = (author, content, emotion) => { // 일기 추가
        const created_date = new Date().getTime(); // 현재 시간
        const newData = {
            author,
            content,
            emotion,
            created_date, 
            id: dataId.current,
        };
        dataId.current++;
        setDatas([newData, ...datas]); // 기존 리스트에 새로운 값 추가
    };

    const onRemove = (targetId) => { // 일기 삭제
        console.log(`${targetId}가 삭제되었습니다.`);
        const newList = datas.filter((d)=> d.id !== targetId);
        setDatas(newList);
    };

    const onEdit = (targetId, newContent) => { // 일기 수정
        setDatas(
            // 수정 대상인 경우 내용 변경, 아니면 유지
            datas.map((d)=>d.id === targetId ? {...d, content: newContent}: d)
        );
    };

    return (
        <div>
            {/* <Lifecycle /> */}
            <DiaryEdit onCreate={onCreate}/>
            <DiaryList dList={datas} onRemove={onRemove} onEdit={onEdit}/>
        </div>
    );
}

export default App;
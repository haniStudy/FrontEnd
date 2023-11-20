import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

const DiaryList = () => {
    const dList = useContext(DiaryStateContext);

    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{dList.length}개의 일기가 있습니다.</h4>
            <div>
                {dList.map((d)=> (
                    <DiaryItem key={d.id} {...d}/>
                ))}
            </div>
        </div>
    )
}

// props 값이 undefined인 경우 기본 값을 설정
DiaryList.defaultProps = {
    dList: [],
};

export default DiaryList;
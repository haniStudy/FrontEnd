import DiaryItem from "./DiaryItem";

const DiaryList = ({dList, onRemove, onEdit}) => {
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{dList.length}개의 일기가 있습니다.</h4>
            <div>
                {dList.map((d)=> (
                    <DiaryItem key={d.id} {...d} onRemove={onRemove} onEdit={onEdit}/>
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
import { useRef, useState } from "react";

const DiaryItem = ({author, content, created_date, emotion, id, onRemove, onEdit}) => {
    const handleRemove = () => { // 삭제
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) onRemove(id);
    };

    // 수정
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => {setIsEdit(!isEdit)};
    const [localContent, setLocalContent] = useState(content); // 수정된 내용
    const localRef = useRef();

    // 수정 취소하기
    const handleQuitEidt = () => {
        toggleIsEdit(); // 원래 상태로 돌아가기
        setLocalContent(content); // 수정하고 있던 내용 초기화
    };

    const handleEdit = () => {
        // 유효성 검사
        if (localContent.length < 5) {
            localRef.current.focus();
            return;
        } 

        if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
            onEdit(id, localContent);
            handleQuitEidt();
        }
    };

    return (
        <div className="DiaryItem">
            <div className="info">
                <span>작성자: {author} | 감정 지수: {emotion}</span>
                <br />
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {isEdit ? 
                <textarea ref={localRef} value={localContent} onChange={(e)=>setLocalContent(e.target.value)} /> 
                : 
                <>{content}</>
                }
            </div>
            {isEdit? 
            <>
                <button onClick={handleQuitEidt}>수정 취소하기</button>
                <button onClick={handleEdit}>수정하기</button>
            </> 
            : 
            <>
                <button onClick={handleRemove}>삭제하기</button>
                <button onClick={toggleIsEdit}>수정하기</button>
            </>
            }
        </div>
    )
}

export default DiaryItem;
import React, { useRef, useState } from "react";

const DiaryEdit = ({onCreate}) => {
    // html DOM 요소에 접근할 수 있게 해줌
    const authorRef = useRef();
    const contentRef = useRef();

    const [state, setState] = useState({
        author: "", // 작성자
        content: "", // 내용
        emotion: 1, // 감정 점수
    });

    const handleChangeState = (e) => {
        const val = e.target;
        setState({
            ...state,
            [val.name]: val.value,
        });
    };

    const handleSubmit = () => {
        if (state.author.length < 1) {
            // 현재 가리키는 값을 가져와서 사용!
            authorRef.current.focus();
            return ;
        }

        if (state.content.length < 5) {
            contentRef.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion); // 저장
        setState({ // input 태그 초기화
            author: "",
            content: "",
            emotion: "",
        })
        alert("저장 성공");
    };

    return (
        <div className="DiaryEdit">
            <h2>오늘의 일기</h2>
            {/* onChange는 값이 바뀌었을 때 수행하는 이벤트 */}
            <div>
                <input ref={authorRef} name="author" value={state.author} onChange={handleChangeState}/>
            </div>
            <div>
                <textarea ref={contentRef} name="content" value={state.content} onChange={handleChangeState}/>
            </div>
            <div>
                오늘의 감정점수 : 
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    )
}

export default React.memo(DiaryEdit);
import React, {useCallback, useEffect, useState} from 'react';
import { addTodo } from '../redux/modules/todoList';

const Header = ({todoList, dispatch}) => {
    // 사용자한테 입력을 받을 때 한번만 렌더링 시키기 위해 useCallback hook 사용
    const [title, setTitle] = useState(''); // 할 일 제목
    const handleChangeTitle = useCallback((e) => {setTitle(e.target.value)}, []);

    const [content, setContent] = useState(''); // 할 일 내용
    const handleChangeContent = useCallback((e) => {setContent(e.target.value)}, []);

    // 새로운 할 일 목록이 추가 되면 입력되었던 값 초기화
    useEffect(() => {
        setTitle("");
        setContent("");
    }, [todoList]);

    return (
        <header className='top'>
            <section className='header-title'>
                <span>TodoList</span>
            </section>

            <section className='header-section'>
                <div className='header-section-div'>
                    <label> 제목 </label> <input type='text' value={title}   onChange={handleChangeTitle} />
                    <label> 내용 </label> <input type='text' value={content} onChange={handleChangeContent}/>
                </div>
                <button onClick={() => {dispatch(addTodo({title, content}))}}>추가하기</button>
            </section>
        </header>
    )
};

export default Header;
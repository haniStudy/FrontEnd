import React, {useEffect} from 'react';
import { addTodo } from '../redux/modules/todoList';
import { useInput } from '../hooks/useInput';

const Header = ({todoList, dispatch}) => {
    const [title, setTitle, handleChangeTitle] = useInput(''); // 할 일 제목
    const [content, setContent, handleChangeContent] = useInput(''); // 할 일 내용

    useEffect(() => { // 새로운 할 일 목록이 추가 되면 입력되었던 값 초기화
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
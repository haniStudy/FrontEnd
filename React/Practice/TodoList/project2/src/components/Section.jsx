import { deleteTodo } from "../redux/modules/todoList";
import { modifyTodo } from "../redux/modules/todoList";
import { Link } from "react-router-dom";

const Section = ({todoList, condition, dispatch}) => {
    // condition: 할 일 상태 (true: 완료, false: 진행중)
    const sectionName = condition ? "Done..! 🎉" : "Working.. 🔥";
    const btnName = condition ? "취소" : "완료";
    return (
        <section className='main-article-section'>
            <p>{sectionName}</p>
            <ul>
                {todoList.filter((item) => item.isDone === condition).map((todo) => {
                    return (
                        <li className='main-article-section-li' key={todo.id}>
                            <Link to={`/detail/${todo.id}`}>상세 보기</Link>
                            <div className='li-top'>
                                <span className='li-title'>{todo.title}</span>
                                <span className='li-content'>{todo.content}</span>
                            </div>
                            <div className='li-bottom'>
                                <button className='li-delete-btn' onClick={()=> dispatch(deleteTodo(todo))}>삭제하기</button>
                                <button className='li-toggle-btn' onClick={() => dispatch(modifyTodo(todo))}>{btnName}</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
};

export default Section;
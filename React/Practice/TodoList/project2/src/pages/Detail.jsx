import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../App.css";

function Detail() {
  const param = useParams();
  const todo = useSelector((state) => (state.todoList)).find((work) => work.id === param.id);

  return (
    <div className='detail-top' key={todo.id}>
      <div className='detail-middle'>
        <header className='detail-header'>
          <div>
            <label>ID : </label> <span>{todo.id}</span>
          </div>
          <Link to={'/'}><button>이전으로</button></Link>
        </header>
        <article>
          <section>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
          </section>
        </article>
      </div>
    </div>
  )
}
export default Detail

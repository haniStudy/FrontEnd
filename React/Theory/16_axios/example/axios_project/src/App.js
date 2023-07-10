import React, { useEffect, useState } from "react";
import api from './axios/api';

const App = () => {
  const [todo, setTodo] = useState({
    title: "",
  });
  const [todos, setTodos] = useState(null);
  const [targetId, setTargetId] = useState(null);
  const [editTodo, setEditTodo] = useState({
    title: "",
  });

  const fetchTodos = async () => {
    const { data } = await api.get(`/todos`);
    // await axios.get("http://localhost:4000/todos");
    setTodos(data); 
  };

  const onSubmitHandler = (todo) => {
    api.post(`/todos`, todo);
    // axios.post("http://localhost:4000/todos", todo);
    
    fetchTodos(); // setTodos([...todos, todo])
  };

	// 새롭게 추가한 삭제 버튼 이벤트 핸들러 
  const onClickDeleteButtonHandler = (todoId) => {
    api.delete(`/todos/${todoId}`);
    //axios.delete(`http://localhost:4000/todos/${todoId}`);
    setTodos(todos.filter((item) => {return item.id !== todoId}))
  };

  const onClickEditButtonHandler = (todoId, edit) => {
    api.patch(`/todos/${todoId}`, edit);
    // axios.patch(`http://localhost:4000/todos/${todoId}`, {edit});
    setTodos(
      todos.map(item => {
        if (item.id == todoId) return {...item, title: edit.title};
        else return item;
      })
    );
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <div>
          <input
            type="text"
            placeholder="수정하고싶은 Todo ID"
            onChange={(ev) => {
              setTargetId(ev.target.value);
            }}
          />
          <input
            type="text"
            placeholder="수정값 입력"
            onChange={(ev) => {
              setEditTodo({
                ...editTodo,
                title: ev.target.value,
              });
            }}
          />
          <button
						// type='button' 을 추가해야 form의 영향에서 벗어남
            type="button"
            onClick={() => onClickEditButtonHandler(targetId, editTodo)}
          >
            수정하기
          </button>
        </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            {/*  디자인이 요상하긴 하지만..! 삭제 버튼 추가 */}
            <button
              type="button"
              onClick={() => onClickDeleteButtonHandler(todo.id)}
            >
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
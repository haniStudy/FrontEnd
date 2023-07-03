import { v4 as uuidv4 } from 'uuid';

// 할 일 추가
const add_Todo = './redux/modules/ADD_TODO';
export const addTodo = (payload) => ( {type: add_Todo, payload:payload} );

// 할 일 삭제
const delete_Todo = './redux/modules/DELETE_TODO';
export const deleteTodo = (payload) => ( {type: delete_Todo, payload:payload} );

// 할 일 상태 변경 (취소, 완료)
const modify_Todo = './redux/modules/MODIFY_TODO';
export const modifyTodo = (payload) => ( {type: modify_Todo, payload:payload} );

/* 할 일 초기 상태
 initialState = [
    {id: uuid, title:"제목", content:"내용", isDone:false}
 ]; */

// 리듀서
const todoList = (state=[], action) => {
    console.log()
    switch (action.type) {
        case add_Todo:
            return addAction(state, action.payload);
        case delete_Todo:
            return deleteAction(state, action.payload);
        case modify_Todo:
            return modifyAction(state, action.payload);
        default:
            return state;
    }
};
export default todoList;


// 함수
const addAction = (state, todo) => {
    const title = todo.title;
    const content = todo.content;
    if (title.trim() === ''){        // 제목 입력 여부 확인
        alert('제목을 입력해주세요');
        return state;
    }
    else if (content.trim() === '') { // 내용 입력 여부 확인
        alert('내용을 입력해주세요');
        return state;
    }
    return [{id: uuidv4(), title, content, isDone:false}, ...state];
};

const deleteAction = (state, todo) => {
    const id = todo.id;
    return state.filter((item) => item.id !== id);
};

const modifyAction = (state, todo) => {
    todo.isDone = !todo.isDone;
    return [...state];
};
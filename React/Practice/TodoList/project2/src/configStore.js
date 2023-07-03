import { createStore } from "redux";
import { combineReducers } from "redux";
import todoList from "./redux/modules/todoList";

/*
리덕스 동작 순서: action —> dispatch —> reducer
combineReducers: 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어줌
*/
const rootReducer = combineReducers({
    todoList: todoList // 스토어와 모듈 연결
}); 

// 스토어를 만드는 메소드(함수)
const store = createStore(rootReducer); 

export default store; 
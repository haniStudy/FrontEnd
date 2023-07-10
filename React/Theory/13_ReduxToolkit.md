# Redux Toolkit
- Redux의 단점을 개선한 라이브러리

## 장점
1. 초기 설정 간편: 기존 Redux는 store를 구성하는 게 복잡
2. 미들웨어 설치 필요 X
3. 반복되는 코드 개선
4. 불변성을 신경 쓰지 않아도 됨: 기존 Redux는 불변성 유지가 어려웠음

### 코드 예시
#### store.js
- store 생성
<pre>
    <code>
        import {configureStore} from '@reduxjs/toolkit';
        import counterSlice from './counterSlice';
        const store = configureStore({
        reducer:{
            counter:counterSlice.reducer
        }
        });
        export default store;
    </code>
</pre>

#### App.js (jsx)
- store 호출 및 저장 (store == 내부 저장소)
<pre>
    <code>
    import { Provider } from "react-redux";
    import Counter from "./components/Counter";
    import store from "./store";

    function App() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
    export default App;
    </code>
</pre>

#### counterSlice.js
- createSlice로 Slice 생성
- createSlice는 객체를 인자로 받고 객체에는 name, initialState, reducers를 필수 요소 
> name: 이름, initialState: 초기 상태, reducers: 메소드(함수)

<pre>
    <code>
        import {createSlice} from '@reduxjs/toolkit';

        <!-- 리듀서의 로직이 되면서도 동시에 Action Creator가 된다는 점! -->
        const counterSlice = createSlice({
            name:'counterSlice',
            initialState:{value:0},
            reducers:{
                // action가 up 일 때 아래 내용 실행 
                up:(state, action)=>{
                state.value = state.value + action.payload;
                }
            }
        });
        export default counterSlice;
        export const {up} = counterSlice.actions;
    </code>
</pre>

* * *
# 참고 사이트
[생활코딩_ReduxToolkit_예시코드](https://stackblitz.com/edit/react-rtsjjn)
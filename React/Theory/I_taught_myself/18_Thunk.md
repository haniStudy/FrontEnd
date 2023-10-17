# Thunk
- 비동기 작업을 처리하기 위한 함수 (미들웨어)
> 미들웨어: 리듀서가 액션을 처리하기 전에 실행되는 함수로 액션과 리듀서 사이의 중간자
- 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것
- thunk를 사용하면 우리가 dispatch를 할때 객체가 아닌 함수를 dispatch 할 수 있게 해줌 
> dispatch(객체) 가 아니라 dispatch(함수)를 할 수 있게 되는 것
> 중간에 우리가 하고자 하는 작업을 함수를 통해 넣을 수 있고, 그것이 중간에 실행이 되는 것

## 장점
1. 비동기 작업 처리
2. 액션 디스패치 지연
3. 액션 크리에이터의 유연성: 함수로 동작하게 되므로, 여러 작업 수행 가능
4. 비동기 작업의 상태 관리: 작업의 상태를 추적하고 관리 할 수 있음

### 기본 구조
<pre>
    <code>
        <!-- createAsyncThunk는 비동기 작업을 처리하는 action을 만들어줌 -->
        const asyncFun = createAsyncThunk(
            '', <!-- 타입 -->
            async () => {
                <!-- 액션이 실행되었을 때 처리 되어야 하는 작업 -->
            }
        )

        const counterSlice = createSlice({
            name: '',
            initialState, 
            <!-- 동기적인 action
                - 자동으로 action create가 생성 O (툴깃)
             -->
            reducers: {},

            <!-- 비동기적인 action 
                - 자동으로 action create가 생성 X
            -->
            extraReducers: (item) => {
                item.addCase(asyncFun.pending, (state, action) => {
                    <!-- 진행중 -->
                    state.status = 'loading';
                })
                item.addCase(asyncFun.fulfilled, (state, action) => {
                    <!-- 완료 -->
                    state.value = action.payload;
                    state.status = 'complete';
                })
                item.addCase(asyncFun.rejected, (state, action) => { 
                    <!-- 오류 -->
                    state.status = 'fail';
                })
            }
        });

    </code>
</pre>

### 코드 예시
#### counterSlice.js
<pre>
    <code>
        <!-- 1. createAsyncThunk 생성 -->
        const asyncUpFetch = createAsyncThunk('counterSlice/asyncUpFetch', async () => {
            const resp = await fetch(
                'https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits'
            );
            const data = await resp.json();
            return data.value;
        });

        <!-- 2. createSlice 생성 -->
        const counterSlice = createSlice({
            name: 'counterSlice',
            initialState: {
                value: 0,
                status: 'Welcome',
            },
            reducers: {
                up: (state, action) => {
                state.value = state.value + action.payload;
                },
            },
            // 2) extraReducers 생성
            extraReducers: (builder) => {
                builder.addCase(asyncUpFetch.pending, (state, action) => {
                    state.status = 'Loading';
                });
                builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
                    state.value = action.payload;
                    state.status = 'complete';
                });
                builder.addCase(asyncUpFetch.rejected, (state, action) => {
                    state.status = 'fail';
                });
            },
        });
        export default counterSlice;
        export const { up, set } = counterSlice.actions;
        export { asyncUp, asyncUpFetch };
    </code>
</pre>

#### App.js
<pre>
    <code>
    import React from 'react';
    import { createStore } from 'redux';
    import { Provider, useSelector, useDispatch } from 'react-redux';
    import store from './store';
    import { up } from './counterSlice';
    <!-- 3. 생성한 Thunk 호출 -->
    import { asyncUpFetch } from './counterSlice';

    function Counter() {
        const dispatch = useDispatch();
        const count = useSelector((state) => {
            return state.counter.value;
        });
        const status = useSelector((state) => {
            return state.counter.status;
        });
        return (
            <div>
                <button onClick={() => { dispatch(up(2)); }}>+</button>

                <!-- 4. 호출 -->
                <button onClick={() => { dispatch(asyncUpFetch()); }} >+ async fetch</button>
                <br />

                <div>
                    {count} | {status}
                </div>
            </div>
        );
    }
    export default function App() {
        return (
            <Provider store={store}>
                <div>
                    <Counter></Counter>
                </div>
            </Provider>
        );
    }
    </code>
</pre>
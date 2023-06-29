# useReducer
- 상태 관리를 위해 사용되는 훅
- 데이터 구조가 복잡한 경우 useState 보다 사용하면 좋음!

## 구조
- 순서 존재
1. useReducer 가져오기
> import React, { useReducer } from 'react';

2. 리듀서 함수 작성
> function reducer(state, action) { return }; -> 꼭 return 명시해주기

3. useReducer를 사용하여 상태 및 디스패치 함수 생성
> const [state, dispatch] = useReducer(reducer, initialState);

4. 디스패치 함수 사용하여 상태 업데이트 (액션을 발생시켜 상태 업데이트)
> const handleIncrement = () => { dispatch({ type: 'INCREMENT' }); };

### 코드 예시
<pre>
    <code>
        import React, { useState, useReducer } from 'react';

        // reducer: state를 업데이트 하는 역할 (은행)
        // dispatch: state 업데이트를 위한 요구
        // action: 요구의 내용

        const action_types = {
            deposit: "deposit",
            withdrow: "withdrow"
        };

        const reducer = (state, action) => {
            switch (action.type) {
                case action_types.deposit:
                return state + action.payload;
                case action_types.withdrow:
                return state - action.payload;
                default:
                return state;
            }
        };

        function App() {
            const [number, setNumber] = useState(0);
            const [money, dispatch] = useReducer(reducer, 0);
            return (
                <div>
                    <h2>은행에 오신 것을 환영합니다</h2>
                    <p>잔고: {money}원</p>
                    <input type='number' 
                    value={number} 
                    onChange={(e) => { setNumber(parseInt(e.target.value))}} 
                    step={1000}
                    />
                    <button onClick={() => { dispatch({type: action_types.deposit, payload: number}); }}>예금</button>
                    <button onClick={() => { dispatch({type: action_types.withdrow, payload: number}); }}>출금</button>
                </div>
            )
        }
        export default App;
    </code>
</pre>
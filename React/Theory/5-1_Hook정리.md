# Hook 총정리
# useState
- 상태 관리에 사용
<pre>
    <code>
        const [test, setTests] = useState('초기값');
    </code>
</pre>

* * *
# useEffect
- 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있음
- 어떤 의존성 배열을 넣어주냐에 따라 다른 결과 초래 가능
1. 마운트 될 때만 렌더링: [] (빈 배열)
2. 특정 값이 업데이트 될 때 렌더링: [특정 값]
<pre>
    <code>
        useEffect(()=>{
            렌더링 시 수행할 내용
        }, [의존성 배열])
    </code>
</pre>

+ cleanup
- 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶을 때 사용
<pre>
    <code>
        useEffect(() => {
            렌더링 시 수행할 내용

            return () => {
                마지막으로 수행할 내용
            }
        }, []);
    </code>
</pre>

* * *
# useContext
- context를 좀 더 편하게 사용할 수 있도록 도와줌
- 즉, 부모가 자식에게 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 전달
<pre>
    <code>
        <!-- 부모 컴포넌트 -->
        <!-- 1. 부모 컴포넌트에 작성: createContext 생성 -->
        export const AppContext = createContext();
        initialValue = {...};

        <!-- 2. Provider로 하위 컴포넌트 감싸기 -->
        return (
            <>
            <AppContext.Provider value={initialValue}>
                <Children />
            </AppContext.Provider>
            </>
        );

        <!-- 자식 컴포넌트 -->
        <!-- 3. 호출 및 부모 데이터 사용 -->
        import { AppContext } from "./App";
        const Children = () => {
            return (
                <AppContext.Consumer>
                    {(initialValue) => (
                    <>
                        <h3>이름은 {initialValue.name}입니다.</h3>
                        <h3>나이는 {initialValue.age}입니다.</h3>
                    </>
                    )}
                </AppContext.Consumer>
            );
        };
    </code>
</pre>

* * *
# useReducer
- 상태 관리 (useState와 동일)
- 데이터가 복잡할 때 사용하면 좋음
<pre>
    <code>
        <!-- 1. 리듀서 작성: 특정 조건별로 내용 작성 -->
        function reducer(state, action) {
            switch (종류) {
                ....
            }
        }

        <!-- 2. 호출 및 사용 -->
        const test = () => {
            const [state, dispatch] = useReducer(reducer, 값);

            return (
                <>
                    <button onClick={() => dispatch({종류})}></button>
                </>
            )
        };
    </code>
</pre>

* * *
# useMemo
- 최적화
- 특정 결과 값을 재사용할 때 사용
- 특정 값이 바뀌었을 때만 연산을 실행, 아니면 이전 결과 값 사용
<pre>
    <code>
        const 변수 = useMemo((실행될 함수), [의존성 배열]);
    </code>
</pre>

* * *
# useCallback
- 최적화
- 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용
<pre>
    <code>
        const 변수 = useCallback(() => {}, [의존성 배열]);
    </code>
</pre>

* * *
# useRef
- 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환
- useRef의 값은 값이 변해도 화면이 렌더링 되지 않음
<pre>
    <code>
        const inputEl = useRef(null);
        useEffect(() => {
            inputEl.current.focus();
        }, []);
    </code>
</pre>

* * *
# Custom Hook
- 개발자가 직접 만든 훅

<pre>
    <code>
        import { useState } from 'react';
        export function useInput(initialValue) {
                const [inputVal, setInputVal] = useState(initialValue);

                const handleChange = (e) => {setInputVal(e.target.value)};

            return [inputVal, handleChange];
        }
    </code>
</pre>